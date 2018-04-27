export const postRegister = async (email, password, name) => {
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: `email=${email}&password=${password}&name=${name}`,
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
