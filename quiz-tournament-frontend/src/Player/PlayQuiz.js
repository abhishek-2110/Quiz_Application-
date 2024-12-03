import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const PlayQuiz = () => {
  const { quizId } = useParams(); // This extracts the quizId from the URL
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
        try {
            console.log("Fetching questions for quizId:", quizId);
            const response = await fetch(`http://localhost:8080/api/quizzes/${quizId}/play`);
            
            if (!response.ok) throw new Error(`Failed to fetch questions. Status: ${response.status}`);
            
            const data = await response.json();
            console.log("Fetched questions:", data); // Log the API response to verify structure
    
            // Process the questions
            const formattedQuestions = data.map((q) => {
                console.log("Processing question:", q); // Log each question for debugging
                if (!q.incorrect_answers || !Array.isArray(q.incorrect_answers)) {
                    throw new Error("Invalid question format: incorrect_answers is not an array");
                }
    
                // Combine correct and incorrect answers, then shuffle them
                const options = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
                return { ...q, options };
            });
    
            setQuestions(formattedQuestions);
        } catch (err) {
            console.error("Error fetching questions:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
   

    if (quizId) {
      fetchQuestions(); // Only call fetch if quizId is valid
    } else {
      setError("Invalid quiz ID");
      setLoading(false);
    }
  }, [quizId]);

  if (loading) {
    return <div className="loading">Loading questions...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (questions.length === 0) {
    return <div className="no-questions">No questions available for this quiz.</div>;
  }

  return (
    <div className="play-quiz">
      <h1>Play Quiz</h1>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>
            <strong>{index + 1}. {decodeHtml(question.question)}</strong>
          </p>
          <ul className="options">
            {question.options.map((option, i) => (
              <li key={i} className="option">
                {decodeHtml(option)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

PlayQuiz.propTypes = {
  quizId: PropTypes.string,
};

export default PlayQuiz;
