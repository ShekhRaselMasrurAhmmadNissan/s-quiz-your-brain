import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import MainLayout from '../Layouts/MainLayout/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
		],
	},
]);

export default router;
