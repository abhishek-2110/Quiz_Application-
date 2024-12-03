import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching quizzes.');
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>All Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            {quiz.title} - {quiz.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewQuizzes;
