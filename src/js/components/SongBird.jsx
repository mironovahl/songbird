import React, { useState } from 'react';
import Header from './Header';
import RandomBird from './RandomBird';
import BirdContent from './BirdContent';
import birdsData from '../birdsData';
import NextButton from './NextButton';

function SongBird() {
  const [level, setLevel] = useState(0);
  const [isTrueAnswer, setIsTrueAnswer] = useState(false);
  const [index, setIndex] = useState(Math.floor(Math.random() * 6));
  const [aboutBird, setAboutBird] = useState(0);
  const currentData = birdsData[level];
  const randomBird = currentData[index];

  return (

    <>
      <Header level={level} />
      <RandomBird randomBird={randomBird} />
      <BirdContent
        currentData={currentData}
        randomBird={randomBird}
        setIsTrueAnswer={setIsTrueAnswer}
        aboutBird={aboutBird}
        setAboutBird={setAboutBird}
      />
      <NextButton
        isTrueAnswer={isTrueAnswer}
        setIsTrueAnswer={setIsTrueAnswer}
        level={level}
        setLevel={setLevel}
        setIndex={setIndex}
        setAboutBird={setAboutBird}
      />
    </>
  );
}

export default SongBird;
