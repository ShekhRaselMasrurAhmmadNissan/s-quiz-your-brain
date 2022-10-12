import React, { useContext } from 'react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { QuizCategoriesContext } from '../../Layouts/MainLayout/MainLayout';

const Statistics = () => {
	const categories = useContext(QuizCategoriesContext);
	return (
		<div className="w-[90%] mx-auto mt-12">
			<p className="mx-12 my-8 shadow-md text-xl font-medium text-center py-2 rounded-xl">
				This is the chart of numbers of quiz in each Category.
			</p>
			<ResponsiveContainer width="100%" height={500}>
				<AreaChart
					data={categories}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient
							id="colorUv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#8884d8"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#8884d8"
								stopOpacity={0}
							/>
						</linearGradient>
						{/* <linearGradient
							id="colorPv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#82ca9d"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#82ca9d"
								stopOpacity={0}
							/>
						</linearGradient> */}
					</defs>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
					{/* <Area
						type="monotone"
						dataKey="pv"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#colorPv)"
					/> */}
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;
