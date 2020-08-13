import React, { useState } from 'react';

const BirdList = (props) => {
  const {
    currentData,
    randomBird,
    isTrueAnswer,
    setIsTrueAnswer,
    setAboutBird,
    points,
    setPoints,
    allPoints,
    setAllPoints,
  } = props;
  const checkAnswer = (target) => {
    if (target.innerText === randomBird.name) {
      target.firstChild.classList.add('correctAnswer');
      setIsTrueAnswer(true);
      setAllPoints(allPoints + points);
    } else {
      if (!isTrueAnswer) {
        target.firstChild.classList.add('wrongAnswer');
      }
      setPoints(points - 1);
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
