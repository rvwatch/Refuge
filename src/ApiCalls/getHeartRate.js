export const getHeartRate = async () => {
  try {
    const response = await fetch('http://localhost:3000/hr-data');
    const heartRate = await response.json();
    return heartRate;
  } catch (errs) {
    throw errs.message;
  }
};
