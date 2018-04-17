export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const addFitBitData = user => ({
  type: 'ADD_FITBIT_DATA',
  user
});

export const addHeartRate = heartRate => ({
  type: 'ADD_HEART_RATE',
  heartRate
});

export const addStepsTaken = steps => ({
  type: 'ADD_STEPS_TAKEN',
  steps
});
 
export const addRestingHeart = restingHeart => ({
  type: 'ADD_RESTING_HEART',
  restingHeart
});