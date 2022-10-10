import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';

const router = createBrowserRouter([{ path: '/', element: <Navbar></Navbar> }]);
export default router;
