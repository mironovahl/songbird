import React, { useState } from 'react';
import BirdCard from './BirdCard';
import BirdList from './BirdList';

const BirdContent = (props) => {
  const { currentData, randomBird, setIsTrueAnswer, aboutBird, setAboutBird } = props;
  return (
    <div className="container">
      <div className="birdContent d-flex">
        <BirdList
          currentData={currentData}
          randomBird={randomBird}
          setIsTrueAnswer={setIsTrueAnswer}
          setAboutBird={setAboutBird}
        />
        <BirdCard aboutBird={aboutBird} />
      </div>
    </div>
  );
};

export default BirdContent;
