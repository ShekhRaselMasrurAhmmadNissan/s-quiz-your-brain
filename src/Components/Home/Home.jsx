import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import thinking from '../../assets/thinking.json';
import {
	CorrectAnswerCounterContext,
	IncorrectAnswerCounterContext,
} from '../../Layouts/MainLayout/MainLayout';
import QuizCategories from '../QuizCategories/QuizCategories';

const Home = () => {
	const [correct, setCorrect] = useContext(CorrectAnswerCounterContext);
	const [incorrect, setIncorrect] = useContext(IncorrectAnswerCounterContext);

	setCorrect(0);
	setIncorrect(0);
	return (
		<>
			<header className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
				<div className="inset-y-0 top-0 right-0 z-0 mt-[-80px] md:mt-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
					<svg
						className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
						viewBox="0 0 100 100"
						fill="currentColor"
						preserveAspectRatio="none slice"
					>
						<path d="M50 0H100L50 100H0L50 0Z" />
					</svg>
					<Lottie
						animationData={thinking}
						loop={true}
						className="h-[600px]"
					/>
				</div>
				<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
							Opening new doors everyday
						</p>
						<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Attend New <br className="hidden md:block" />
							Quiz{' '}
							<span className="inline-block text-emerald-400">
								Everyday
							</span>
						</h2>
						<p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
							Quiz or Brain teasers are one of the most efficient
							way to judge ones knowledge on any topic. So what
							are you waiting for? Choose a topic and start your
							exam.
						</p>
						<div className="flex items-center">
							<Link
								to="/"
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
							>
								Get started
							</Link>
							<Link
								to="../about"
								aria-label=""
								className="inline-flex items-center font-semibold text-gray-800  duration-500 hover:text-blue-700 hover:text-xl"
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</header>

			{/* Quiz Categories Section Start */}

			<section className="mt-4 md:mt-16 md:w-4/5 lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-evenly gap-y-8">
				<QuizCategories></QuizCategories>
			</section>
		</>
	);
};

export default Home;
