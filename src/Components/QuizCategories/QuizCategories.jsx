import React, { useContext } from 'react';
import { QuizCategoriesContext } from '../../Layouts/MainLayout/MainLayout';

const QuizCategories = () => {
	const quizCategories = useContext(QuizCategoriesContext);
	console.log(quizCategories);
	return (
		<div>
			<h1>This is Quiz Categories: {quizCategories?.length}</h1>
		</div>
	);
};

export default QuizCategories;
