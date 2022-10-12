import React from 'react';

const AboutUs = () => {
	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-5 row-gap-8 lg:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="max-w-xl mb-6">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								<span className="relative px-1">
									<div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
									<span className="relative inline-block text-purple-400 text-4xl">
										S-Quiz Your Brain
									</span>
								</span>
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								Knowledge have no boundary and a man should be
								open to learn new things everyday till their
								last breath.
							</p>
						</div>
						<div className="grid gap-5 row-gap-8 sm:grid-cols-2">
							<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
								<div className="h-full p-5 border border-l-0 rounded-r">
									<h6 className="mb-2 font-semibold leading-5">
										New Quiz Everyday
									</h6>
									<p className="text-sm text-gray-900">
										We will try to update new quiz everyday.
										So that you can test your brain
										regularly.
									</p>
								</div>
							</div>
							<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
								<div className="h-full p-5 border border-l-0 rounded-r">
									<h6 className="mb-2 font-semibold leading-5">
										To be added
									</h6>
									<p className="text-sm text-gray-900">
										There are some more things to be added.
										One of the most interesting part is a
										record of previous tests.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img
							className="object-fit w-full rounded shadow-lg sm:h-96 ring-2"
							src="/logo.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
