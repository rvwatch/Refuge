export const getFitbitProfile = async () => {
  try {
    const response = await fetch('http://localhost:3000/fb-profile');
    const data = await response.json();
    return data;
  } catch (errs) {
    throw errs.message;
  }
};
