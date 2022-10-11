import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error/Error';
import Home from '../Components/Home/Home';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { getAllQuizCategories } from '../Utilities/Loaders/Loaders';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		loader: getAllQuizCategories,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
		],
	},
]);

export default router;
