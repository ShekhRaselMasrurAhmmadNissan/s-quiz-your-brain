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
