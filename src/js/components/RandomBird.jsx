import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import unknownBird from '../../img/randomBird.jpg';
import 'react-h5-audio-player/lib/styles.css';

const RandomBird = (props) => {
  const { randomBird, isTrueAnswer, audioPlayer } = props;
  console.log(randomBird.name);
  RandomBird.propTypes = {
    randomBird: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    }).isRequired,
    isTrueAnswer: PropTypes.bool.isRequired,
    audioPlayer: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  return (
    <div className="container">
      <div className="randomBird jumbotron d-flex">
        <img className="randomBird__image" src={isTrueAnswer ? randomBird.image : unknownBird} alt="unknownBird" />
        <div className="randomBird__content">
          <h2>{isTrueAnswer ? randomBird.name : '***'}</h2>
          <hr className="my-4" />
          <AudioPlayer
            ref={audioPlayer}
            autoPlayAfterSrcChange={false}
            className="randomBird__player"
            src={randomBird.audio}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomBird;
