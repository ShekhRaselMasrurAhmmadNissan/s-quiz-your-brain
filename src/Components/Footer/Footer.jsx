import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="mt-4 lg:mt-8 px-4 lg:px-8 py-8 bg-gray-300 text-gray-600">
				<div className="container flex flex-wrap items-center justify-between md:justify-center mx-auto space-y-4 sm:space-y-0">
					<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
						<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-blue-600">
							<img
								src="/logo.png"
								alt=""
								className="rounded-full"
							/>
						</div>
						<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-blue-700">
							<li>
								<a rel="noopener noreferrer" href="#">
									Terms of Use
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Privacy
								</a>
							</li>
						</ul>
					</div>
					<ul className="grid grid-cols-2 md:grid-cols-4 items-center justify-center lg:pl-3 space-x-4 sm:space-x-8 lg:divide-x-4 divide-green-400 text-lg text-blue-800 font-semibold">
						<li>
							<a
								target="__blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/shekh_rasel_masrur_ahmmad/"
							>
								Instagram
							</a>
						</li>
						<li className="pl-4">
							<a
								target="__blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/shekhraselmasrurahmmad"
							>
								Facebook
							</a>
						</li>
						<li className="pl-4">
							<a
								target="__blank"
								rel="noopener noreferrer"
								href="https://twitter.com/NissanAhmmad"
							>
								Twitter
							</a>
						</li>
						<li className="pl-4">
							<a
								target="__blank"
								rel="noopener noreferrer"
								href="https://github.com/ShekhRaselMasrurAhmmadNissan"
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
