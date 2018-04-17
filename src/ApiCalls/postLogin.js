export const postLogin = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: `username=${username}&password=${password}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
    const user = await response.json();
    return user;
  } catch (errs) {
    throw errs.message;
  }
};
