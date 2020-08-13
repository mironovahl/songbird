import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import unknownBird from '../../img/randomBird.jpg';
import 'react-h5-audio-player/lib/styles.css';

const RandomBird = (props) => {
  const { randomBird } = props;

  return (
    <div className="container">
      <div className="randomBird jumbotron d-flex">
        <img className="randomBird__image" src={unknownBird} alt="unknownBird" />
        <div className="randomBird__content">
          <h2>{randomBird.name}</h2>
          <hr className="my-4" />
          <AudioPlayer
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
