const addRestingHeartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RESTING_HEART':
      return action.restingHeart;
    default:
      return state;
  }
};

export default addRestingHeartReducer;
