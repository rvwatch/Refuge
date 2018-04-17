export const postLogout = async () => {
  try {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'POST'
    });
    const user = await response.json();
    return user;
  } catch (errs) {
    throw errs.message;
  }
};
