import React from 'react';

const Blogs = () => {
	return (
		<div className="mt-8">
			<section className=" text-black text-center">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-bold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 mb-8 text-lg text-black">
						Humans are curious. They always have thirst to learn new
						things and to learn new things one have to ask
						questions. Here are some frequently asked questions and
						their answers.
					</p>
					<div className="space-y-4">
						<details
							className="w-full border-2 shadow-md rounded-lg"
							open=""
						>
							<summary className="px-4 py-6 focus:outline-blue-500 focus-visible:ring-blue-600 text-xl font-semibold">
								What is the purpose of React Routing?
							</summary>
							<p className="px-4 py-6 mx-4 border-t-2 pt-2 text-lg text-black text-justify">
								Routing is a process in which a user is directed
								to different pages based on their action or
								request. Each time the user visits a new route
								the webpage reload itself. Which is kind of
								annoying to most of the users. To solve that
								problem, React Router was introduced. React
								Router plays an important role to display
								multiple views in a single page application. By
								this method the webpage do not need to reload
								every-time a new route gets hit. So the webpage
								can give faster and smooth experience to the
								users.
							</p>
						</details>

						<details
							className="w-full border-2 shadow-md rounded-lg"
							open=""
						>
							<summary className="px-4 py-6 focus:outline-blue-500 focus-visible:ring-blue-600 text-xl font-semibold">
								What is the purpose of React Routing?
							</summary>
							<p className="px-4 py-6 mx-4 border-t-2 pt-2 text-lg text-black text-justify">
								Routing is a process in which a user is directed
								to different pages based on their action or
								request. Each time the user visits a new route
								the webpage reload itself. Which is kind of
								annoying to most of the users. To solve that
								problem, React Router was introduced. React
								Router plays an important role to display
								multiple views in a single page application. By
								this method the webpage do not need to reload
								every-time a new route gets hit. So the webpage
								can give faster and smooth experience to the
								users.
							</p>
						</details>
						<details
							className="w-full border-2 shadow-md rounded-lg"
							open=""
						>
							<summary className="px-4 py-6 focus:outline-blue-500 focus-visible:ring-blue-600 text-xl font-semibold">
								What is the purpose of React Routing?
							</summary>
							<p className="px-4 py-6 mx-4 border-t-2 pt-2 text-lg text-black text-justify">
								Routing is a process in which a user is directed
								to different pages based on their action or
								request. Each time the user visits a new route
								the webpage reload itself. Which is kind of
								annoying to most of the users. To solve that
								problem, React Router was introduced. React
								Router plays an important role to display
								multiple views in a single page application. By
								this method the webpage do not need to reload
								every-time a new route gets hit. So the webpage
								can give faster and smooth experience to the
								users.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
