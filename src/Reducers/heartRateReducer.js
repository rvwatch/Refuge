const heartRateReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HEART_RATE':
    return action.heartRate;
  case 'LOGOUT_USER':
    return [];
  default:
    return state;
  }
};

export default heartRateReducer;
