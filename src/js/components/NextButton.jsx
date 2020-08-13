import React from 'react';

const NextButton = (props) => {
  const {
    isTrueAnswer,
    setIsTrueAnswer,
    level,
    setLevel,
    setIndex,
    setAboutBird,
  } = props;
  const classDisabled = isTrueAnswer ? '' : 'disabled';

  const reset = () => {
    setLevel(level + 1);
    setIsTrueAnswer(false);
    setAboutBird(0);
  };

  return (
    <div className="container">
      <button
        type="button"
        className={`nextButton btn btn-primary ${classDisabled}`}
        onClick={() => {
          setIndex(Math.floor(Math.random() * 6));
          return isTrueAnswer ? setLevel(level + 1) : null;
        }}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default NextButton;
