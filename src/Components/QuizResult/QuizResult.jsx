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

const QuizResult = ({ correct, incorrect }) => {
	const data = [{ name: 'Result', Correct: correct, Incorrect: incorrect }];
	return (
		<div className="w-full">
			<ResponsiveContainer width="100%" height={500}>
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
