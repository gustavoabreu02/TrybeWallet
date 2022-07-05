import React from 'react';
import FormLogin from '../components/FormLogin';

class Login extends React.Component {
  render() {
    return (
      <div>
        <FormLogin { ...this.props } />
      </div>
    );
  }
}

export default Login;
