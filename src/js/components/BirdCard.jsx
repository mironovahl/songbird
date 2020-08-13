import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const BirdCard = (props) => {
  const { aboutBird } = props;
  return (
    <div className="birdContent__card">
      {!aboutBird ? <p>Послушайте плеер и выберите птицу из списка.</p>
        : (
          <div>
            <div className="birdContent__card_main d-flex">
              <img className="card__image" src={aboutBird.image} alt="unknownBird" />
              <div className="card__about">
                <h3 className="card__about_name">{aboutBird.name}</h3>
                <hr className="my-1" />
                <p className="card__about_name--latin">{aboutBird.species}</p>
                <AudioPlayer
                  autoPlayAfterSrcChange={false}
                  className="randomBird__player"
                  src={aboutBird.audio}
                />
              </div>
            </div>
            <p className="birdContent__card_description">{aboutBird.description}</p>
          </div>
        )}
    </div>
  );
};

export default BirdCard;
