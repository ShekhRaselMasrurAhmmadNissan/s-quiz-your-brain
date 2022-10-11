import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllQuizPage = () => {
	const quizInformation = useLoaderData();
	const { name, total, questions } = quizInformation;
	console.log(quizInformation);
	return (
		<div>
			This is all quiz page of {name} and total quiz {total}
		</div>
	);
};

export default AllQuizPage;
