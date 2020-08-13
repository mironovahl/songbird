import React from 'react';
import certificate from '../../img/certificate.png';

const EndGame = (props) => {
  const { allPoints, setLevel, setAllPoints } = props;
  const resetGame = () => {
    setLevel(0);
    setAllPoints(0);
  };
  return (
    <div className="container">
      <div className="endGame text-center jumbotron">
        <h1 className="text-secondary">Поздравляем!</h1>
        <p className="text-primary">
          Вы прошли викторину и набрали
          {' '}
          {allPoints}
          {' '}
          из 30 возможных баллов.
        </p>
        {allPoints === 30 ? <div><img className="certificate" src={certificate} alt="certificate" /></div> : null}
        <button type="button" className="repeatButton btn btn-primary" onClick={resetGame}>Попробовать ещё раз</button>
      </div>
    </div>
  );
};

export default EndGame;
