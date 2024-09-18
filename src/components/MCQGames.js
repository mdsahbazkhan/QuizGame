import React, { useState } from 'react';
import { questions } from '../data/questions.js';

const MCQGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);  // Index of current question
  const [score, setScore] = useState(0);                      // User's score
  const [showScore, setShowScore] = useState(false);          // Toggle to display final score
  const [selectedAnswer, setSelectedAnswer] = useState('');   // User's selected answer
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // Track incorrect answers

  // Handle next question or score display
  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]); // Track the incorrect answer
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');  // Clear selected answer
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="mcq-game-container">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <h3>Incorrect Answers:</h3>
          <ul>
            {incorrectAnswers.map((index) => (
              <li key={index}>
                <div className="incorrect-question">
                  <p>{questions[index].questionText}</p>
                  <p><strong>Correct Answer:</strong> {questions[index].answer}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="restart-button" onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`answer-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion + 1 === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MCQGame;
