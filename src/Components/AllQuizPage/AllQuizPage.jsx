import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const AllQuizPage = () => {
	const quizInformation = useLoaderData();
	const { name, total, questions } = quizInformation;
	console.log(quizInformation);
	return (
		<div>
			{questions.map((question, index) => (
				<SingleQuestion
					key={question.id}
					question={question}
					index={index}
				></SingleQuestion>
			))}
		</div>
	);
};

export default AllQuizPage;
