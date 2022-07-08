import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionWalletInfo } from '../actions';

class HeaderWallet extends React.Component {
/*   constructor() {
    super();
    this.state = {
      valorInicial: 0,
    };
  }
 */
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

  render() {
    const { email, soma } = this.props;
    /* const { valorInicial } = this.state; */
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <br />
          <span data-testid="total-field">
            { soma }
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
  soma: state.wallet.soma || 0,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  soma: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
