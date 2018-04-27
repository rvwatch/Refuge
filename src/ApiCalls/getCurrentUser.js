export const getCurrentUser = async () => {
  try {
    const response = await fetch('http://localhost:3001/currentuser', {
      method: 'GET',
      credentials: 'include'
    });
    const user = await response.json();
    return user;
  } catch (errs) {
    throw errs.message;
  }
};
