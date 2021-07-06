import React from 'react';
// import PropTypes : outil qui va nous servir à valider nos props.
// import PropTypes from 'prop-types';

// on importe notre fichier SCSS
import './header.scss';

// petit rappel : le return implicite
// une fonction fléchée qui n'a pas d'acollades
// délimitant son corps
// renverra sa première instruction
// attention, en JSX, class devient className
const Header = ({ baseAmount }) => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__title">Converter</h1>
      <h2 className="header__subtitle">{baseAmount} euro</h2>
    </div>
  </header>
);

export default Header;
