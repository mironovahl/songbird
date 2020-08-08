import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
  const h = 0;
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
            {h}
          </h3>
        </div>
        <div>
          <ul className="pagination pagination-lg levels">
            <li className="page-item active levels__name">
              <a className="page-link" href="/#">1</a>
            </li>
            <li className="page-item levels__name">
              <a className="page-link" href="/#">2</a>
            </li>
            <li className="page-item levels__name">
              <a className="page-link" href="/#">3</a>
            </li>
            <li className="page-item levels__name">
              <a className="page-link" href="/#">4</a>
            </li>
            <li className="page-item levels__name">
              <a className="page-link" href="/#">5</a>
            </li>
            <li className="page-item levels__name">
              <a className="page-link" href="/#">6</a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
