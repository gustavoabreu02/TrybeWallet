import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    function validateEmail(emai) {
      const re = /\S+@\S+\.\S+/;
      return re.test(emai);
    }
    this.setState({
      [name]: value,
    }, () => {
      const { email, senha } = this.state;
      const minLength = 6;
      if (senha.length >= minLength && validateEmail(email)) {
        this.setState({
          button: false,
        });
      } else {
        this.setState({
          button: true,
        });
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(actionUser(this.state));
    history.push('/carteira');
  }

  render() {
    const { email, senha, button } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              name="email"
              id="email-input"
              type="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              name="senha"
              id="password-input"
              type="text"
              data-testid="password-input"
              minLength="6"
              value={ senha }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
            disabled={ button }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
