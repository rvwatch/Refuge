const fitbitDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FITBIT_DATA':
      return action.user;
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
};

export default fitbitDataReducer;
