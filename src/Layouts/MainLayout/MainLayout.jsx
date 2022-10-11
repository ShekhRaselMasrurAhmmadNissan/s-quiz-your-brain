import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/NavBar/Navbar';

export const QuizCategoriesContext = createContext([]);

const MainLayout = () => {
	const quizCategories = useLoaderData();
	return (
		<QuizCategoriesContext.Provider value={quizCategories}>
			<Navbar />
			<Outlet />
		</QuizCategoriesContext.Provider>
	);
};

export default MainLayout;
