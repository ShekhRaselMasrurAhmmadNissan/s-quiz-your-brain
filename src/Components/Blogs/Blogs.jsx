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
							open={true}
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
								multiple views in a{' '}
								<kbd className="bg-slate-200 px-2 italic">
									single page application
								</kbd>{' '}
								. By this method the webpage do not need to
								reload every-time a new route gets hit. So the
								webpage can give faster and smooth experience to
								the users.
							</p>
						</details>

						<details
							className="w-full border-2 shadow-md rounded-lg"
							open=""
						>
							<summary className="px-4 py-6 focus:outline-blue-500 focus-visible:ring-blue-600 text-xl font-semibold">
								How does Context API works?
							</summary>
							<p className="px-4 py-6 mx-4 border-t-2 pt-2 text-lg text-black text-justify">
								To perform a task perfectly we sometime needs to
								pass data from parent component to child
								component or sometimes deeper. However, to pass
								the data we have to face{' '}
								<kbd className="bg-slate-200 px-2 italic">
									PROPS
								</kbd>{' '}
								drilling. Which is annoying and the developers
								can make mistakes more often. To avoid these
								problems,{' '}
								<kbd className="bg-slate-200 px-2 italic">
									Context API
								</kbd>{' '}
								provides a better solution. It helps to create a
								global variable for some data. To create the
								context we have to use a method named{' '}
								<kbd className="bg-slate-200 px-2 italic">
									createContext()
								</kbd>{' '}
								which returns a provider and consumer. The
								Provider or Parents Components will provide the
								value of that{' '}
								<kbd className="bg-slate-200 px-2 italic">
									Context
								</kbd>{' '}
								and all will children or their children can
								access that data as Consumer.
							</p>
						</details>

						<details
							className="w-full border-2 shadow-md rounded-lg"
							open=""
						>
							<summary className="px-4 py-6 focus:outline-blue-500 focus-visible:ring-blue-600 text-xl font-semibold">
								What is useRef() hook in React?
							</summary>
							<p className="px-4 py-6 mx-4 border-t-2 pt-2 text-lg text-black text-justify">
								<kbd className="bg-slate-200 px-2 italic">
									useRef()
								</kbd>{' '}
								is a Hook similar to{' '}
								<kbd className="bg-slate-200 px-2 italic">
									useState()
								</kbd>{' '}
								hook. The difference is that{' '}
								<kbd className="bg-slate-200 px-2 italic">
									useState()
								</kbd>{' '}
								returns an array of a data and a function. Where
								<kbd className="bg-slate-200 px-2 italic">
									useRef()
								</kbd>{' '}
								returns only single mutable value with a
								property of{' '}
								<kbd className="bg-slate-200 px-2 italic">
									current
								</kbd>{' '}
								. And to mutate the data we have set the data to
								the{' '}
								<kbd className="bg-slate-200 px-2 italic">
									current
								</kbd>{' '}
								property. However, in case of{' '}
								<kbd className="bg-slate-200 px-2 italic">
									useState()
								</kbd>{' '}
								the UI render every-time the state changes.
								Which may cause an infinite Render Loop. On the
								other hand the
								<kbd className="bg-slate-200 px-2 italic">
									useRef()
								</kbd>{' '}
								do not have this kind of setbacks.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
