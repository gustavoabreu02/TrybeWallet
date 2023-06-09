// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const WALLET_ALL_INFO = 'WALLET_ALL_INFO';
export const WALLET_DELETE = 'WALLET_DELETE';

export const actionUser = (state) => ({
  type: USER_INFO,
  payload: {
    email: state.email,
  },
});

export const actionWalletInfo = (state) => ({
  type: WALLET_INFO,
  payload: {
    currencies: state,
  },
});

export const actionWalletAllInfo = (state) => ({
  type: WALLET_ALL_INFO,
  payload: {
    expenses: state,
  },
});

export const actionWalletDelete = (id) => ({
  type: WALLET_DELETE,
  payload: {
    id,
  },
});
