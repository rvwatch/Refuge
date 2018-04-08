export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const addFitBitUser = user => ({
  type: 'ADD_FITBIT_USER',
  user
});

export const addHeartRate = heartRate => ({
  type: 'ADD_HEART_RATE',
  heartRate
});

export const addActivity = activity => ({
  type: 'ADD_ACTIVITY',
  activity
});
