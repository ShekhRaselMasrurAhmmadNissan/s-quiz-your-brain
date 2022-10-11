import { createBrowserRouter } from 'react-router-dom';
import AllQuizPage from '../Components/AllQuizPage/AllQuizPage';
import Error from '../Components/Error/Error';
import Home from '../Components/Home/Home';
import Statistics from '../Components/Statistics/Statistics';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import {
	getAllQuizByCategoriesId,
	getAllQuizCategories,
} from '../Utilities/Loaders/Loaders';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		loader: getAllQuizCategories,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
			{
				path: 'quiz/:id',
				loader: async ({ params }) =>
					getAllQuizByCategoriesId(params.id),
				element: <AllQuizPage />,
			},
			{ path: 'statistics', element: <Statistics /> },
		],
	},
]);

export default router;
