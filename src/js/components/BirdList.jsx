import React, { useState } from 'react';

const BirdList = (props) => {
  const {
    currentData,
    randomBird,
    setIsTrueAnswer,
    setAboutBird
  } = props;
  const checkAnswer = (target) => {
    if (target.innerText === randomBird.name) {
      target.firstChild.classList.add('correctAnswer');
      setIsTrueAnswer(true);
    } else {
      target.firstChild.classList.add('wrongAnswer');
    }
  };
  const clickBird = (index, { target }) => {
    checkAnswer(target);
    setAboutBird(currentData[index]);
  };

  return (
    <ul className="list-group birdContent__list">
      {currentData.map((item, index) => (
        <button type="button" className="birdItem list-group-item d-flex" onClick={(event) => clickBird(index, event)} key={item.id}>
          <span className="checkAnswer badge-primary disabled" />
          {item.name}
        </button>
      ))}
    </ul>
  );
};

export default BirdList;
