import React, { useState } from "react";
import questions from "./qna.json";

const QuizCP = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      window.location = "/result?score=" + score;
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleQuitQuiz = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location = "/";
    }
  };
  const handleFinishQuiz = () => {
    window.location = "/result?score=" + score;
   
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    handleNextQuestion();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="mb-8">
        <div className="text-xl font-bold">
          Question: {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="text-lg my-4">{currentQuestion.question}</div>
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(currentQuestion)
            .filter((key) => key.startsWith("option"))
            .map((key) => (
              <button
                key={key}
                onClick={() => handleOptionClick(currentQuestion[key])}
                className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
              >
                {currentQuestion[key]}
              </button>
            ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePreviousQuestion}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
        >
          Next
        </button>
        <button
          onClick={handleQuitQuiz}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Quit
        </button>
        <button
          onClick={handleFinishQuiz}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default QuizCP;
