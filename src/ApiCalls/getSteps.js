export const getSteps = async () => {
  try {
    const response = await fetch('http://localhost:3000/steps-taken');
    const steps = await response.json();
    return steps;
  } catch (errs) {
    throw errs.message;
  }
};
