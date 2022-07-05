import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormWallet extends React.Component {
  render() {
    const { currencies } = this.props;
    const formasDePgmt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categorias = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
              value={ () => 'a' }
              onChange={ () => 'a' }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              name="description"
              id="description-input"
              type="text"
              data-testid="description-input"
              value={ () => 'a' }
              onChange={ () => 'a' }
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {currencies.map((moeda, i) => (
                <option value={ moeda } key={ i }>
                  {moeda}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento:
            <select id="method-input" data-testid="method-input">
              {formasDePgmt.map((pagamento, i) => (
                <option key={ i } value={ pagamento }>{pagamento}</option>
              ))}
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select id="tag-input" data-testid="tag-input">
              {categorias.map((categoria, i) => (
                <option key={ i } value={ categoria }>{categoria}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(FormWallet);
