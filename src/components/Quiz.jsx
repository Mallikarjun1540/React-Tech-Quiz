import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const isQuizcompleted = activeQuestionIndex === QUESTIONS.length;

  const handleClickedAnswers = useCallback(
    function handleClickedAnswers(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

    },

    []
  );

  const handleSkippedAnswers = useCallback(
    () => handleClickedAnswers(null),
    [handleClickedAnswers]
  );
  if (isQuizcompleted) {
    return  <Summary userAnswers={userAnswers}/>
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleClickedAnswers}
        onSkipAnswer={handleSkippedAnswers}
      />
    </div>
  );
}
