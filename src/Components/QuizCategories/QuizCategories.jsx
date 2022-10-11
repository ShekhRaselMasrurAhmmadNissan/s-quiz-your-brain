import React, { useContext } from 'react';
import { QuizCategoriesContext } from '../../Layouts/MainLayout/MainLayout';
import SingleQuizCategory from '../SingleQuizCategory/SingleQuizCategory';

const QuizCategories = () => {
	const quizCategories = useContext(QuizCategoriesContext);
	console.log(quizCategories);
	return (
		<>
			{quizCategories.map((singleCategory) => (
				<SingleQuizCategory
					key={singleCategory.id}
					singleCategory={singleCategory}
				></SingleQuizCategory>
			))}
		</>
	);
};

export default QuizCategories;
