import React, { useContext, useState } from 'react';
import {
	CorrectAnswerCounterContext,
	IncorrectAnswerCounterContext,
} from '../../Layouts/MainLayout/MainLayout';
import {
	isCorrectAnswer,
	setAnswerClass,
} from '../../Utilities/Loaders/Loaders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({ question, index, selected, setSelected }) => {
	const [selectedAnswer, setSelectedAnswer] = useState();
	const [correct, setCorrect] = useContext(CorrectAnswerCounterContext);
	const [incorrect, setIncorrect] = useContext(IncorrectAnswerCounterContext);

	const findSelectedAnswer = selected.find(
		(item) => item?.question === index
	);

	// setSelectedAnswer(findSelectedAnswer?.answer);

	const { options, question: quizQuestion, correctAnswer } = question;
	const handleAnswerClick = (text, answerIndex) => {
		const newAnswer = { question: index, answer: answerIndex };
		console.log(selected, index);
		const isAlreadySelected = selected.find(
			(item) => item?.question === index
		);
		if (isAlreadySelected) {
			toast.warning('You have already answered the question.');
			return;
		}
		if (isCorrectAnswer(text, correctAnswer)) {
			toast.success('WOW..!!! You have selected the Correct answer!!!');
			setCorrect(correct + 1);
			newAnswer.isCorrect = true;
		} else {
			toast.error('Sorry..!!! You have selected the wrong answer!!!');
			setIncorrect(incorrect + 1);
			newAnswer.isCorrect = false;
		}
		setSelected([...selected, newAnswer]);
	};
	return (
		<div className="border-2 rounded-lg ml-6 p-8">
			<p className="mb-6 text-xl font-semibold">
				<span className="text-blue-700">Quiz:{index + 1}</span>{' '}
				{quizQuestion.replace(/<[^>]*>?/gm, '')}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{options.map((option, index) => (
					<div
						key={index}
						className={setAnswerClass(index, findSelectedAnswer)}
						onClick={(event) =>
							handleAnswerClick(event.target.innerText, index)
						}
					>
						{option}
					</div>
				))}
			</div>
			<ToastContainer
				position="top-center"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={true}
				draggable={true}
				pauseOnHover={true}
				theme="light"
			/>
		</div>
	);
};

export default SingleQuestion;
