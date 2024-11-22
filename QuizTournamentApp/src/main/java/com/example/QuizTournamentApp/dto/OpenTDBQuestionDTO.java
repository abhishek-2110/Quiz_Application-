package com.example.QuizTournamentApp.dto;

import java.util.List;

public class OpenTDBQuestionDTO {
    private String question;
    private String correctAnswer;
    private List<String> incorrectAnswers;

    // Getters and Setters
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCorrectAnswer() { // Renamed getter to align with naming conventions
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) { // Renamed setter to align with naming conventions
        this.correctAnswer = correctAnswer;
    }

    public List<String> getIncorrectAnswers() {
        return incorrectAnswers;
    }

    public void setIncorrectAnswers(List<String> incorrectAnswers) {
        this.incorrectAnswers = incorrectAnswers;
    }
}
