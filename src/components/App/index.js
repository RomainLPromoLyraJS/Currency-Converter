// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import AllCurrencies from 'src/components/AllCurrencies';
import Footer from 'src/components/Footer';

// on importe nos données statiques depuis recipe
import currencies from 'src/data/currencies';

// on importe notre SCSS du composant Appß
import './app.scss';

// == Composant
const App = () => {
  const open = true;

  return (
    <div className="app">
      <Header baseAmount={1} />
      <button
        type="button"
        onClick={() => {

        }}
      >
        ouvrir la liste des devises
      </button>
      {open && <AllCurrencies allcurrencies={currencies} />}
      <Footer value={1.09} currency="United States Dollar" />
    </div>
  );
};

// == Export
export default App;
