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
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      baseAmount: 100,
      currentCurrency: 'Australian Dollar',

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this.state après modification :', this.state);

    const { open } = this.state;

    console.log('juste apres setState');

    this.setState({ open: !open });

    console.log('juste apres setState');
  }

  handleCurrencies(event) {
    console.log('voici mon event : ', event);

    console.log('mon event.target', event.target);
  }

  computeResult() {
    const currency = currencies.find((curr) => curr.name === this.state.currentCurrency);

    const result = this.state.baseAmount * currency.rate;
    return result;
  }

  // il a une méthode render, qui renvoie le JSX
  render() {
    console.log('Render du composant App');

    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount} />
        {/* notre tout premier event handler en react ! */}
        <button
          type="button"
          className="app__toggler"
          onClick={this.handleClick}
        >
          ouvrir la liste des devises
        </button>
        {this.state.open && <AllCurrencies onClick={this.handleCurrencies} allcurrencies={currencies} />}
        <Footer value={this.computeResult()} currency={this.state.currentCurrency} />
      </div>
    );
  }
}

// == Export
export default App;
