import React, { useState } from 'react';

const SingleQuestion = ({
	question,
	index,
	correct,
	setCorrect,
	incorrect,
	setIncorrect,
}) => {
	const [isChecked, setIsChecked] = useState(false);

	const { options, question: quizQuestion, correctAnswer } = question;
	const handleAnswerClick = (text) => {
		setIsChecked(true);
		if (
			text.toLowerCase().replace(/\s+/g, ' ').trim() ===
			correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim()
		) {
			console.log(text.toLowerCase().replace(/\s+/g, ' ').trim());
			console.log(
				correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim()
			);
			setCorrect(correct + 1);
		} else {
			console.log(text.toLowerCase().replace(/\s+/g, ' ').trim());
			console.log(
				correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim()
			);
			setIncorrect(incorrect + 1);
		}
	};
	return (
		<div
			className={
				isChecked
					? 'border-2 rounded-lg ml-6 p-8 disabled'
					: 'border-2 rounded-lg ml-6 p-8'
			}
		>
			<p className="mb-6 text-xl font-semibold">
				<span className="text-blue-700">Quiz:{index + 1}</span>{' '}
				{quizQuestion.replace(/<[^>]*>?/gm, '')}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{options.map((option, index) => (
					<div
						key={index}
						className="border-2 p-2 border-green-500 rounded-xl font-semibold hover:bg-green-500 cursor-pointer hover:text-white duration-300"
						onClick={(event) =>
							handleAnswerClick(event.target.innerText)
						}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

export default SingleQuestion;
