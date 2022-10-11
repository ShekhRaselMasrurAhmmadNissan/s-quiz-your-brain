export const getAllQuizCategories = async () => {
	const response = await fetch(
		`https://openapi.programming-hero.com/api/quiz`
	);
	const categoriesData = await response.json();
	const categories = categoriesData.data;
	return categories;
};

export const getAllQuizByCategoriesId = async (id) => {
	const response = await fetch(
		`https://openapi.programming-hero.com/api/quiz/${id}`
	);
	const quizData = await response.json();
	const quizInformation = quizData.data;
	return quizInformation;
};

export const isCorrectAnswer = (answer, correctAnswer) => {
	if (
		answer.toLowerCase().replace(/\s+/g, ' ').trim() ===
		correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim()
	) {
		return true;
	} else {
		return false;
	}
};

export const setAnswerClass = (answerIndex, findSelectedAnswer) => {
	if (findSelectedAnswer) {
		if (
			findSelectedAnswer.answer === answerIndex &&
			findSelectedAnswer.isCorrect
		) {
			return 'border-2 p-2 border-green-500 bg-green-500 rounded-xl font-semibold hover:bg-green-500 cursor-pointer hover:text-white duration-300';
		} else if (
			findSelectedAnswer.answer === answerIndex &&
			!findSelectedAnswer.isCorrect
		) {
			return 'border-2 p-2 border-green-500 bg-red-400 rounded-xl font-semibold hover:bg-green-500 cursor-pointer hover:text-white duration-300';
		} else {
			return 'border-2 p-2 border-green-500 rounded-xl font-semibold hover:bg-green-500 cursor-pointer hover:text-white duration-300';
		}
	} else {
		return 'border-2 p-2 border-green-500 rounded-xl font-semibold hover:bg-green-500 cursor-pointer hover:text-white duration-300';
	}
};
