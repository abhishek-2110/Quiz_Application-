import axios from "axios";

/* importing axiosfrom axios */
export const fetchAllQuizzes = async () => {
  const response = await axios.get("http://localhost:8080/api/quizzes/all");
  return response.data;
};

export const likeQuiz = async (quizId) => {
  await axios.post(`http://localhost:8080/api/quizzes/${quizId}/like`);
};

export const unlikeQuiz = async (quizId) => {
  await axios.post(`http://localhost:8080/api/quizzes/${quizId}/unlike`);
};

export const fetchQuizQuestions = async (quizId) => {
  const response = await axios.get(
    `http://localhost:8080/api/quizzes/${quizId}/play`
  );
  return response.data;
};
