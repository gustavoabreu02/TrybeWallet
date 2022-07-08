import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionWalletAllInfo, actionWalletSoma } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { dispatch } = this.props;
    const fetchSiglasMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await fetchSiglasMoedas.json();
    delete data.USDT;
    this.setState((state) => ({
      id: state.id + 1,
      exchangeRates: data,
    }), () => {
      dispatch(actionWalletAllInfo(this.state));
      this.setState({
        value: '',
        description: '',
        exchangeRates: {},
      });
      const { somaTotal } = this.props;
      const { exchangeRates, currency, value } = this.state;
      Object.values(exchangeRates).forEach((coin) => {
        if (currency === coin.code) {
          const soma = Number(value) * Number(coin.ask);
          console.log(somaTotal);
          dispatch(actionWalletSoma(somaTotal + soma));
        }
      });
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, tag, method, currency } = this.state;
    const formasDePgmt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categorias = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              name="value"
              id="value-input"
              type="number"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              name="description"
              id="description-input"
              type="text"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              id="moeda"
              onChange={ this.handleChange }
              name="currency"
              value={ currency }
            >
              {currencies.map((coin, i) => (
                <option
                  value={ coin }
                  key={ i }
                >
                  {coin}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento:
            <select
              id="method-input"
              data-testid="method-input"
              onChange={ this.handleChange }
              name="method"
              value={ method }
            >
              {formasDePgmt.map((pagamento, i) => (
                <option key={ i } value={ pagamento }>
                  {pagamento}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select
              id="tag-input"
              data-testid="tag-input"
              onChange={ this.handleChange }
              name="tag"
              value={ tag }
            >
              {categorias.map((category, i) => (
                <option key={ i } value={ category }>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  somaTotal: state.wallet.soma,
  expenses: state.wallet.expenses,
});

FormWallet.propTypes = {
  currencies: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  somaTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(FormWallet);
