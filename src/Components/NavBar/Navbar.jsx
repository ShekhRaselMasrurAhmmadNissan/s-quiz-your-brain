import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="bg-gray-100 sticky top-0 z-40">
			<div className="px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8">
				<div className="relative flex items-center justify-between">
					<NavLink
						to="/"
						aria-label="S-Quiz Your Brain"
						title="S-Quiz Your Brain"
						className="flex items-center"
					>
						<img
							src="/logo.png"
							alt=""
							className="w-8 rounded-full ring-1 ring-offset-1 ring-emerald-400"
						/>
						<span className="ml-4 text-lg md:text-3xl font-bold tracking-wide text-emerald-400 uppercase">
							S-Quiz Your Brain
						</span>
					</NavLink>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						<li>
							<NavLink
								to="home"
								aria-label="Home"
								title="Home"
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-lg transition-colors duration-200 text-blue-700 underline underline-offset-8 decoration-blue-700'
										: 'font-medium tracking-wide text-black text-lg transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700'
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="topics"
								aria-label="Topics"
								title="Topics"
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-lg transition-colors duration-200 text-blue-700 underline underline-offset-8 decoration-blue-700'
										: 'font-medium tracking-wide text-black text-lg transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700'
								}
							>
								Topics
							</NavLink>
						</li>
						<li>
							<NavLink
								to="statistics"
								aria-label="Quiz Statistics"
								title="Quiz Statistics"
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-lg transition-colors duration-200 text-blue-700 underline underline-offset-8 decoration-blue-700'
										: 'font-medium tracking-wide text-black text-lg transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700'
								}
							>
								Statistics
							</NavLink>
						</li>
						<li>
							<NavLink
								to="blogs"
								aria-label="Blogs"
								title="Blogs"
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-lg transition-colors duration-200 text-blue-700 underline underline-offset-8 decoration-blue-700'
										: 'font-medium tracking-wide text-black text-lg transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700'
								}
							>
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="about"
								aria-label="About us"
								title="About us"
								className={({ isActive }) =>
									isActive
										? 'font-medium tracking-wide text-lg transition-colors duration-200 text-blue-700 underline underline-offset-8 decoration-blue-700'
										: 'font-medium tracking-wide text-black text-lg transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700'
								}
							>
								About us
							</NavLink>
						</li>
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg
								className="w-5 text-gray-600"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-14 left-0 w-full bg-gray-200 z-10">
								<div className="p-5 border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												<svg
													className="w-5 text-gray-600"
													viewBox="0 0 24 24"
												>
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<NavLink
													to="home"
													aria-label="Home"
													title="Home"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700"
													onClick={() =>
														setIsMenuOpen(false)
													}
												>
													Home
												</NavLink>
											</li>
											<li>
												<NavLink
													to="topics"
													aria-label="Topics"
													title="Topics"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700"
													onClick={() =>
														setIsMenuOpen(false)
													}
												>
													Topics
												</NavLink>
											</li>
											<li>
												<NavLink
													to="statistics"
													aria-label="Quiz Statistics"
													title="Quiz Statistics"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700"
													onClick={() =>
														setIsMenuOpen(false)
													}
												>
													Statistics
												</NavLink>
											</li>
											<li>
												<NavLink
													to="blogs"
													aria-label="Blogs"
													title="Blogs"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700"
													onClick={() =>
														setIsMenuOpen(false)
													}
												>
													Blogs
												</NavLink>
											</li>
											<li>
												<NavLink
													to="about"
													aria-label="About us"
													title="About us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-700 hover:underline hover:underline-offset-8 hover:decoration-blue-700"
													onClick={() =>
														setIsMenuOpen(false)
													}
												>
													About us
												</NavLink>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
