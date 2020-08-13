import React from 'react';

const NextButton = (props) => {
  const {
    isTrueAnswer,
    setIsTrueAnswer,
    level,
    setLevel,
    setIndex,
    setAboutBird,
    setPoints,
  } = props;
  const classDisabled = isTrueAnswer ? '' : 'disabled';

  const reset = () => {
    setLevel(level + 1);
    setIsTrueAnswer(false);
    setAboutBird(0);
    if (level < 5) {
      setIndex(Math.floor(Math.random() * 6));
    }
    setPoints(5);
  };

  return (
    <div className="container">
      <button
        type="button"
        className={`nextButton btn btn-primary ${classDisabled}`}
        onClick={() => (isTrueAnswer ? reset() : null)}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default NextButton;
