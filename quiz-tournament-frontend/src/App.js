import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PlayerPage from "./pages/PlayerPage";
import PlayQuiz from "./components/Player/PlayQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/player/play/:quizId" element={<PlayQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
