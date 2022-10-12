import React, { useContext } from 'react';
import { QuizCategoriesContext } from '../../Layouts/MainLayout/MainLayout';
import SingleQuizCategory from '../SingleQuizCategory/SingleQuizCategory';

const QuizCategories = () => {
	const quizCategories = useContext(QuizCategoriesContext);
	console.log(quizCategories);
	return (
		<>
			<h1 className="text-center text-4xl font-bold mt-4 md:mt-8">
				All Quiz Categories
			</h1>
			<div className="mt-4 md:mt-16 md:w-4/5 lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-evenly gap-y-8">
				{quizCategories.map((singleCategory) => (
					<SingleQuizCategory
						key={singleCategory.id}
						singleCategory={singleCategory}
					></SingleQuizCategory>
				))}
			</div>
		</>
	);
};

export default QuizCategories;
