import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<footer className="mt-4 lg:mt-8 px-4 lg:px-8 py-8 bg-gray-300 text-gray-600">
				<div className="container grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:justify-between">
					<div className="flex items-center justify-center lg:justify-start">
						<Link
							to="/"
							aria-label="S-Quiz Your Brain"
							title="S-Quiz Your Brain"
							className="flex items-center"
						>
							<img
								src="/logo.png"
								alt=""
								className="w-12 rounded-full ring-1 ring-offset-1 ring-emerald-400"
							/>
							<span className="ml-4 text-lg md:text-3xl font-bold tracking-wide text-emerald-400 uppercase">
								S-Quiz Your Brain
							</span>
						</Link>
					</div>
					<div className="text-lg font-semibold grid grid-cols-2 md:grid-cols-4 items-center justify-center lg:justify-evenly text-center">
						<a
							target="__blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/shekh_rasel_masrur_ahmmad/"
							className="text-blue-600 hover:text-emerald-400 px-2"
						>
							Instagram
						</a>
						<a
							target="__blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/shekhraselmasrurahmmad"
							className="text-blue-600 hover:text-emerald-400 px-2"
						>
							Facebook
						</a>
						<a
							target="__blank"
							rel="noopener noreferrer"
							href="https://twitter.com/NissanAhmmad"
							className="text-blue-600 hover:text-emerald-400 px-2"
						>
							Twitter
						</a>
						<a
							target="__blank"
							rel="noopener noreferrer"
							href="https://github.com/ShekhRaselMasrurAhmmadNissan"
							className="text-blue-600 hover:text-emerald-400 px-2"
						>
							GitHub
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
