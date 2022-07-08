import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableWallet extends React.Component {
  /*   constructor() {
    super();
    this.state = {
      valorInicial: 0,
    };
  }
 */

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {expenses.map(
              ({
                id,
                value,
                currency,
                method,
                tag,
                description,
                exchangeRates: {
                  [currency]: { name, ask },
                },
              }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{name}</td>
                  <td>{Number(ask).toFixed(2)}</td>
                  <td>{Number(value * ask).toFixed(2)}</td>
                  <td>Real</td>
                </tr>
              ),
            )}
          </thead>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableWallet.propTypes = {
  expenses: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(TableWallet);
