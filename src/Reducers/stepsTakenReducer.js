const stepsTakenReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STEPS_TAKEN':
      return action.steps;
    default:
      return state;
  }
};

export default stepsTakenReducer;
