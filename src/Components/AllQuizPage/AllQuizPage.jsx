import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
	CorrectAnswerCounterContext,
	IncorrectAnswerCounterContext,
} from '../../Layouts/MainLayout/MainLayout';
import QuizResult from '../QuizResult/QuizResult';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const AllQuizPage = () => {
	const [correct, setCorrect] = useContext(CorrectAnswerCounterContext);
	const [incorrect, setIncorrect] = useContext(IncorrectAnswerCounterContext);
	const quizInformation = useLoaderData();
	const { name, total, questions } = quizInformation;
	const [selected, setSelected] = useState([]);
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-5 mt-6">
				<div className="col-span-1 lg:col-span-3 ">
					<h1 className="text-center md:text-4xl font-bold text-blue-600 underline underline-offset-4 decoration-blue-500 mb-10">
						Quiz Topic: {name}
					</h1>
					<div className="grid gap-6 justify-center items-center">
						{questions.map((question, index) => (
							<SingleQuestion
								key={question.id}
								question={question}
								index={index}
								selected={selected}
								setSelected={setSelected}
							></SingleQuestion>
						))}
					</div>
				</div>

				<div className="col-span-1 lg:col-span-2">
					<QuizResult
						correct={correct}
						incorrect={incorrect}
					></QuizResult>
				</div>
			</div>
		</>
	);
};

export default AllQuizPage;
