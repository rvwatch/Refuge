import React from 'react';
import '../LoginContainer.css';
import { postLogin } from '../../../ApiCalls/postLogin';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../Actions/';



function NewSignIn (){

  const dispatch = useDispatch(); 
  const signInUser = async (e) => {
    e.preventDefault();
    const user = await postLogin(e.target.elements.username.value, e.target.elements.password.value);
    dispatch(Actions.addUser(user));
  };

  return (
    <form className="signin-form" onSubmit={signInUser}>
      <h2>Sign-In</h2>
      <div>
        <input
          type="text"
          placeholder="email"
          name="username"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          name="password"
        />
      </div>
      <div>
        <input className="submit-btn" type="submit" value="enter" />
      </div>
    </form>
  );
}



export default NewSignIn;
