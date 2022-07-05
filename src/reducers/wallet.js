import { WALLET_INFO } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
