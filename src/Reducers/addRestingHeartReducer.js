const addRestingHeartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RESTING_HEART':
      return action.restingHeart;
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
};

export default addRestingHeartReducer;
