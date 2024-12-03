import React, { useState } from 'react';
import axios from 'axios';

const UpdateQuiz = () => {
  const [quizId, setQuizId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/quizzes/${quizId}`, { title, description });
      alert('Quiz updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating quiz.');
    }
  };

  return (
    <div>
      <h2>Update Quiz</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Quiz ID"
          value={quizId}
          onChange={(e) => setQuizId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="New Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateQuiz;
