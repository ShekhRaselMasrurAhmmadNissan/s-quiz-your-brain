import React from 'react';
import Lottie from 'lottie-react';
import error from '../../assets/error.json';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<section className="flex items-center h-full sm:p-8 bg-gray-50 text-gray-800">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-4 text-center sm:max-w-md lg:max-w-lg">
					<Lottie
						animationData={error}
						loop={true}
						className="h-[500px] md:w-[800px] md:mt-[-70px]"
					/>
					<p className="text-3xl">
						Looks like you have lost the track. Please return to the
						home.
					</p>
					<Link
						to="home"
						className="px-8 py-3 font-semibold rounded bg-blue-600 text-gray-50 hover:bg-blue-400 duration-300"
					>
						Back to Home
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Error;
