import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizDetails = () => {
  const { id } = useParams(); // Get quiz ID from route
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  // Fetch quiz details by ID
  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/quizzes/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz details:', error);
        alert('Failed to fetch quiz details!');
      }
    };

    fetchQuizDetails();
  }, [id]);

  if (!quiz) {
    return <p>Loading...</p>; // Show loading indicator while fetching
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <button style={styles.button} onClick={() => navigate(`/play-quiz/${quiz.id}`)}>
        Start Quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuizDetails;
