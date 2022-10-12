import React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const QuizResult = ({ correct, incorrect, total }) => {
	const data = [{ name: 'Result', Correct: correct, Incorrect: incorrect }];
	return (
		<div className="w-full mt-6 lg:mt-0 lg:sticky lg:top-[100px]">
			<div className=" border-4 px-4 py-2 border-teal-600 rounded-xl w-4/5 mx-auto">
				<p className="text-2xl font-medium">
					Total Quiz: <span className="text-blue-500">{total}</span>
				</p>
			</div>
			<div className=" border-4 px-4 py-2 border-teal-600 rounded-xl w-4/5 mx-auto mt-4">
				<p className="text-2xl font-medium">
					Correct Answers:{' '}
					<span className="text-blue-500">{correct}</span>
				</p>
			</div>
			<div className=" border-4 px-4 py-2 border-teal-600 rounded-xl w-4/5 mx-auto my-4">
				<p className="text-2xl font-medium">
					Incorrect Answers:{' '}
					<span className="text-red-500">{incorrect}</span>
				</p>
			</div>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="Correct" fill="#33ff33" />
					<Bar dataKey="Incorrect" fill="#ff5c33" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default QuizResult;
