export const postLogin = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      params: {
        username: username,
        password: password
      }
    });
    const user = await response.json();
    return user;
  } catch (errs) {
    throw errs.message;
  }
};
