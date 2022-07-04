import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionWallet } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const fetchSiglasMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await fetchSiglasMoedas.json();
    const arrayMoedas = Object.keys(data).filter((value) => value !== 'USDT');
    dispatch(actionWallet(arrayMoedas));
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <br />
          <span data-testid="total-field">{0}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
