const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.user;
    default:
      return state;
  }
};

export default addUserReducer;
