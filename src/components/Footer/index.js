import React from 'react';
// import PropTypes : outil qui va nous servir à valider nos props.
// import PropTypes from 'prop-types';

// on importe notre fichier SCSS
import './footer.scss';

// petit rappel : le return implicite
// une fonction fléchée qui n'a pas d'acollades
// délimitant son corps
// renverra sa première instruction
// attention, en JSX, class devient className
const Footer = ({ value, currentCurrency }) => (
  <footer className="footer">
    <div className="footer__content">
      <h1 className="footer__title">{value}</h1>
      <h2 className="footer__subtitle">{currentCurrency}</h2>
    </div>
  </footer>
);

export default Footer;
