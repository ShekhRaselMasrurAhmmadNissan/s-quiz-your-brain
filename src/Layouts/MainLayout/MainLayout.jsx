import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';

export const QuizCategoriesContext = createContext([]);
export const CorrectAnswerCounterContext = createContext([]);
export const IncorrectAnswerCounterContext = createContext([]);

const MainLayout = () => {
	const quizCategories = useLoaderData();
	const [correct, setCorrect] = useState(0);
	const [incorrect, setIncorrect] = useState(0);
	return (
		<CorrectAnswerCounterContext.Provider value={[correct, setCorrect]}>
			<IncorrectAnswerCounterContext.Provider
				value={[incorrect, setIncorrect]}
			>
				<QuizCategoriesContext.Provider value={quizCategories}>
					<Navbar />
					<Outlet />
					<Footer />
				</QuizCategoriesContext.Provider>
			</IncorrectAnswerCounterContext.Provider>
		</CorrectAnswerCounterContext.Provider>
	);
};

export default MainLayout;
