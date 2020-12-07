import React from 'react';
// import PropTypes : outil qui va nous servir à valider nos props.
import PropTypes from 'prop-types';

// on importe notre fichier SCSS
import './allcurrencies.scss';

// petit rappel : le return implicite
// une fonction fléchée qui n'a pas d'acollades
// délimitant son corps
// renverra sa première instruction
// attention, en JSX, class devient className
const AllCurrencies = ({ allcurrencies }) => (
  <div className="all-currencies">
    <h3 className="all-currencies__title">Currencies</h3>
    <ul className="all-currencies__list">
      {allcurrencies.map(({ name, rate }) => (
        <li key={rate}>{name}</li>
      ))}
    </ul>
  </div>
);

AllCurrencies.propTypes = {
  allcurrencies: PropTypes.arrayOf( // un tableau...
    PropTypes.shape({ // de la forme de... (un objet)
      name: PropTypes.string.isRequired, // ici, toutes les clés de mon objet
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired, // obligatoire
};

export default AllCurrencies;
