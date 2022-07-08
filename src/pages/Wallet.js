import React from 'react';
import FormWallet from '../components/FormWallet';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet { ...this.props } />
        <FormWallet />
        <TableWallet />
      </div>
    );
  }
}

export default Wallet;
