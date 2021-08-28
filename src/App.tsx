import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard'
import { fetchQuizQuestions } from "./API";
import { Difficulty } from "./API";

const TOTAL_QUESTION = 10;
const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

  const startTrivia = async () => {}

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const NextQuestion = () => {

  }
  

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">
        Score : 5
      </p>  
      <p>Loding question ..</p>

      {/* <QuestionCard
        questionNo={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={CheckAnswer}
      /> */}
      <button className="next" onClick={NextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
