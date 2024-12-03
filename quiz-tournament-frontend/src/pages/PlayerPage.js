import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/playerpage.css";

const PlayerPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      setError(null); // Reset error before fetching
      const response = await fetch("http://localhost:8080/api/quizzes/all");
      if (!response.ok) {
        throw new Error(`Failed to fetch quizzes. Status: ${response.status}`);
      }
      const data = await response.json();
      setQuizzes(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLike = async (quizId) => {
    try {
      await fetch(`http://localhost:8080/api/quizzes/${quizId}/like`, {
        method: "POST",
      });
      fetchQuizzes(); // Refresh quizzes after like
    } catch (error) {
      alert("Failed to like the quiz. Please try again.");
    }
  };

  const handleUnlike = async (quizId) => {
    try {
      await fetch(`http://localhost:8080/api/quizzes/${quizId}/unlike`, {
        method: "POST",
      });
      fetchQuizzes(); // Refresh quizzes after unlike
    } catch (error) {
      alert("Failed to unlike the quiz. Please try again.");
    }
  };

  const handlePlay = (quizId) => {
    navigate(`/player/play/${quizId}`); // Navigate to PlayQuiz page
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="player-page">
      <h1>Available Quizzes</h1>
      <div className="quiz-list">
        {quizzes.length === 0 ? (
          <p>No quizzes available at the moment. Please check back later.</p>
        ) : (
          quizzes.map((quiz) => (
            <div className="quiz-card" key={quiz.id}>
              <h2>{quiz.title}</h2>
              <p>Category: {quiz.category || "N/A"}</p>
              <p>Difficulty: {quiz.difficulty || "N/A"}</p>
              <p>Likes: {quiz.likes}</p>
              <button onClick={() => handleLike(quiz.id)}>Like</button>
              <button onClick={() => handleUnlike(quiz.id)}>Unlike</button>
              <button onClick={() => handlePlay(quiz.id)}>Play</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlayerPage;