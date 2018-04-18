const addUserReducer = (state = {}, action) => {
  debugger;
  switch (action.type) {
    case 'ADD_USER':
      return action.user;
    case 'SET_LOGGED_IN':
      return state.loggedIn = true;
    case 'LOGOUT_USER':
      return action.user, state.loggedIn = false;
    default:
      return state;
  }
};

export default addUserReducer;
