import React from 'react';

class TableWallet extends React.Component {
/*   constructor() {
    super();
    this.state = {
      valorInicial: 0,
    };
  }
 */

  render() {
    /* const { valorInicial } = this.state; */
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
          </thead>
        </table>
      </div>
    );
  }
}

export default TableWallet;
