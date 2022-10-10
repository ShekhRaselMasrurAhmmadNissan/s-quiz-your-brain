import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
