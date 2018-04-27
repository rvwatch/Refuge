export const postLogin = async (username, password) => {
  try {
    console.log('about to post');
    
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: `username=${username}&password=${password}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
    console.log(response);
    
    const user = await response.json();
    console.log(user);
    
    return user;
  } catch (errs) {
    throw errs.message;
  }
};
