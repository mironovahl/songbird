import React from 'react';
import logo from '../../img/logo.png';

const generateLevels = (level) => {
  const levels = ['Хищные', 'Насекомоядные', 'Растительноядные', 'Нелетающие', 'Водолавающие', 'Перелетные'];
  return levels.map((item, index) => {
    const classLevel = index === level ? 'page-item levels__name active' : 'page-item levels__name';
    return (
      <li className={classLevel} key={item}>
        <a className="page-link" href="/#">{item}</a>
      </li>
    );
  });
};

const Header = (props) => {
  const { level, allPoints } = props;
  return (
    <header className="header bg-primary">
      <div className="container">
        <div className="top-panel d-flex">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <h3 className="header__score">
            Score:
            {' '}
            {allPoints}
          </h3>
        </div>
        <div>
          <ul className="pagination pagination levels">
            {generateLevels(level)}
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
