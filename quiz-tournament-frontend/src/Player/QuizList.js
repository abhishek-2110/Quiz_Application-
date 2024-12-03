import React from "react";
import '../../styles/playerpage.css';

const QuizDetails = ({ quiz, handleLike, handlePlay }) => {
  return (
    <div className="quiz-card">
      <h2>{quiz.title}</h2>
      <p>Category: {quiz.category || "N/A"}</p>
      <p>Difficulty: {quiz.difficulty || "N/A"}</p>
      <p>Likes: {quiz.likes}</p>
      <button onClick={() => handleLike(quiz.id)} className="like-button">
        {quiz.liked ? "Unlike" : "Like"}
      </button>
      <button onClick={() => handlePlay(quiz.id)} className="play-button">
        Play
      </button>
    </div>
  );
};

export default QuizDetails;
