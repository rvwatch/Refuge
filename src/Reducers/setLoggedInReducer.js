const setLoggedInReducer = (state = false, action) => {
  switch (action.type) {
  case 'SET_LOGGED_IN':
    return true;
  case 'LOGOUT_USER':
    return false;
  default:
    return state;
  }
};

export default setLoggedInReducer;
