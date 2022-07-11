import {
  WALLET_INFO,
  WALLET_ALL_INFO,
  WALLET_DELETE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  soma: 0,
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case WALLET_ALL_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case WALLET_DELETE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter(
          (despesa) => Number(despesa.id) !== Number(action.payload.id),
        ),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
