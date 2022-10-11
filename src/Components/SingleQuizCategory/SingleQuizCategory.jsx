import React from 'react';

const SingleQuizCategory = ({ singleCategory }) => {
	const { id, name, logo, total } = singleCategory;
	return (
		<>
			<div className="rounded-md w-[95%] md:w-[500px] mx-auto shadow-md bg-gray-200 text-gray-800">
				<img
					src={logo}
					alt=""
					className="object-cover object-center w-full rounded-t-md md:h-[500px] bg-gray-500"
				/>
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-semibold tracking-wide">
							{name}
						</h2>
						<p className="text-emerald-500 font-semibold">
							Total Quiz: {total}
						</p>
					</div>
					<button
						type="button"
						className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50"
					>
						Start The Quiz{' '}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 ml-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default SingleQuizCategory;
