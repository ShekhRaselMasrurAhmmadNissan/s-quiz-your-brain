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

	const showCorrectAnswer = () => {
		toast.success(correctAnswer);
	};

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
			<p className="mb-6 text-xl font-semibold flex items-center justify-between">
				<p className="w-[90%]">
					<span className="text-blue-700">Quiz:{index + 1}</span>{' '}
					{quizQuestion.replace(/<[^>]*>?/gm, '')}
				</p>
				<button onClick={showCorrectAnswer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</button>
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
