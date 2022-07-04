// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const actionUser = (state) => ({
  type: USER_INFO,
  payload: {
    email: state.email,
  },
});

export const actionWallet = (state) => ({
  type: WALLET_INFO,
  payload: {
    currencies: state,
  },
});
