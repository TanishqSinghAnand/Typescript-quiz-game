import React from 'react';

const App = () => {

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
    </div>
  );
}

export default App;
