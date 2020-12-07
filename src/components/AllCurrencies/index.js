import React from 'react';
// import PropTypes : outil qui va nous servir à valider nos props.
// import PropTypes from 'prop-types';

// on importe notre fichier SCSS
import './allcurrencies.scss';

// petit rappel : le return implicite
// une fonction fléchée qui n'a pas d'acollades
// délimitant son corps
// renverra sa première instruction
// attention, en JSX, class devient className
const AllCurrencies = ({ name }) => (
  <div className="all-currencies">
    <h3 className="all-currencies__title">Currencies</h3>
    <ul className="all-currencies__list">
      <li>{name}</li>
    </ul>
  </div>
);

export default AllCurrencies;
