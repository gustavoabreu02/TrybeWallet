// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';

export const actionUser = (state) => ({
  type: USER_INFO,
  payload: {
    email: state.email,
  },
});
