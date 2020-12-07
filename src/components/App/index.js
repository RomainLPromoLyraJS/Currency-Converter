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
const App = () => (
  <div className="app">
    <Header />
    <AllCurrencies allcurrencies={currencies.allcurrencies} />
    <Footer />
  </div>
);

// == Export
export default App;
