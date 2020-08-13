import React, { useState } from 'react';
import BirdCard from './BirdCard';
import BirdList from './BirdList';

const BirdContent = (props) => {
  const {
    currentData,
    randomBird,
    isTrueAnswer,
    setIsTrueAnswer,
    aboutBird,
    setAboutBird,
    points,
    setPoints,
    allPoints,
    setAllPoints,
  } = props;
  return (
    <div className="container">
      <div className="birdContent d-flex">
        <BirdList
          currentData={currentData}
          randomBird={randomBird}
          isTrueAnswer={isTrueAnswer}
          setIsTrueAnswer={setIsTrueAnswer}
          setAboutBird={setAboutBird}
          points={points}
          setPoints={setPoints}
          allPoints={allPoints}
          setAllPoints={setAllPoints}
        />
        <BirdCard aboutBird={aboutBird} />
      </div>
    </div>
  );
};

export default BirdContent;
