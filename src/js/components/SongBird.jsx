import React, { useState, createRef } from 'react';
import Header from './Header';
import RandomBird from './RandomBird';
import BirdContent from './BirdContent';
import birdsData from '../birdsData';
import NextButton from './NextButton';
import EndGame from './EndGame';

function SongBird() {
  const [level, setLevel] = useState(0);
  const [points, setPoints] = useState(5);
  const [allPoints, setAllPoints] = useState(0);
  const [isTrueAnswer, setIsTrueAnswer] = useState(false);
  const [index, setIndex] = useState(Math.floor(Math.random() * 6));
  const [aboutBird, setAboutBird] = useState(0);
  const audioPlayer = createRef();
  let currentData = birdsData[1];
  if (level < 6) {
    currentData = birdsData[level];
  }
  const randomBird = currentData[index];

  return (

    <>
      <Header
        level={level}
        allPoints={allPoints}
      />
      {level > 5 ? <EndGame allPoints={allPoints} setLevel={setLevel} setAllPoints={setAllPoints} />
        : (
          <>
            <RandomBird
              randomBird={randomBird}
              isTrueAnswer={isTrueAnswer}
              audioPlayer={audioPlayer}
            />
            <BirdContent
              currentData={currentData}
              randomBird={randomBird}
              isTrueAnswer={isTrueAnswer}
              setIsTrueAnswer={setIsTrueAnswer}
              aboutBird={aboutBird}
              setAboutBird={setAboutBird}
              points={points}
              setPoints={setPoints}
              allPoints={allPoints}
              setAllPoints={setAllPoints}
              audioPlayer={audioPlayer}
            />
            <NextButton
              isTrueAnswer={isTrueAnswer}
              setIsTrueAnswer={setIsTrueAnswer}
              level={level}
              setLevel={setLevel}
              setIndex={setIndex}
              setAboutBird={setAboutBird}
              setPoints={setPoints}
            />
          </>
        )}
    </>
  );
}

export default SongBird;
