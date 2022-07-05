import React from 'react';
import FormWallet from '../components/FormWallet';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet { ...this.props } />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
