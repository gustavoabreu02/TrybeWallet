import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionWalletDelete } from '../actions';

class TableWallet extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete({ target }) {
    const { id } = target;
    const { dispatch } = this.props;

    dispatch(actionWalletDelete(id));
  }

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
              }, i) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{name}</td>
                  <td>{Number(ask).toFixed(2)}</td>
                  <td>{Number(value * ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      id={ id }
                      name={ i }
                      type="button"
                      data-testid="delete-btn"
                      onClick={ this.handleDelete }
                    >
                      Excluir
                    </button>
                  </td>
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
  soma: state.wallet.soma,
});

TableWallet.propTypes = {
  expenses: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TableWallet);
