import React from 'react';
import PropTypes from 'prop-types';
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
    audioPlayer,
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
          audioPlayer={audioPlayer}
        />
        <BirdCard aboutBird={aboutBird} />
      </div>
    </div>
  );
};

BirdContent.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  randomBird: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
  isTrueAnswer: PropTypes.bool.isRequired,
  setIsTrueAnswer: PropTypes.func.isRequired,
  aboutBird: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    }),
    PropTypes.number,
  ]).isRequired,
  setAboutBird: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  setPoints: PropTypes.func.isRequired,
  allPoints: PropTypes.number.isRequired,
  setAllPoints: PropTypes.func.isRequired,
  audioPlayer: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BirdContent;
