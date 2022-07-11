import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionWalletInfo } from '../actions';

class HeaderWallet extends React.Component {
  constructor() {
    super();
    this.somaTotal = this.somaTotal.bind(this);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const fetchSiglasMoedas = await fetch(
      'https://economia.awesomeapi.com.br/json/all',
    );
    const data = await fetchSiglasMoedas.json();
    delete data.USDT;
    const arrayMoedas = Object.keys(data);
    dispatch(actionWalletInfo(arrayMoedas));
  }

  somaTotal() {
    const { expenses, somaReducer } = this.props;
    console.log(somaReducer);
    if (expenses.length > 0) {
      return expenses.reduce((total, despesa) => {
        const currency = despesa.exchangeRates[despesa.currency];
        const { ask } = currency;
        const soma = despesa.value * Number(ask);
        const somaTotal = Math.trunc(soma * 100) / 100;
        console.log(somaTotal);
        return total + somaTotal;
      }, 0);
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <br />
          <span data-testid="total-field">
            { this.somaTotal() }
          </span>
          <span data-testid="header-currency-field">BRL</span>
          <br />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  somaReducer: Math.trunc(state.wallet.soma * 100) / 100 || 0,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.instanceOf(Object).isRequired,
  somaReducer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
