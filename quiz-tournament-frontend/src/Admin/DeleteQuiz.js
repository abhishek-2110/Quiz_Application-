import React, { useState } from 'react';
import axios from 'axios';

const DeleteQuiz = () => {
  const [quizId, setQuizId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/quizzes/${quizId}`);
      alert('Quiz deleted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error deleting quiz.');
    }
  };

  return (
    <div>
      <h2>Delete Quiz</h2>
      <input
        type="text"
        placeholder="Enter Quiz ID"
        value={quizId}
        onChange={(e) => setQuizId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteQuiz;
