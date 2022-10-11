import React, { useState } from 'react';

const SingleQuestion = ({ question, index }) => {
	const [isChecked, setIsChecked] = useState(false);

	const { options, question: quizQuestion, correctAnswer } = question;
	return (
		<div>
			<p>
				Quiz:{index + 1}
				{quizQuestion.replace(/<[^>]*>?/gm, '')}
			</p>
			<div>
				{options.map((option) => (
					<div>{option}</div>
				))}
			</div>
		</div>
	);
};

export default SingleQuestion;
