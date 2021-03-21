import React, { useEffect } from 'react';
import firebase from 'firebase';
import '../LoginContainer.css';
import { postLogin } from '../../../ApiCalls/postLogin';
import { useDispatch } from 'react-redux';
import * as Actions from '../../../Actions/';



function NewSignIn (){

  useEffect( () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcxCaic7ghfcSvxLbWeKUed3nmFNXaiME',
      authDomain: 'refuge-d2418.firebaseapp.com',
      projectId: 'refuge-d2418',
      storageBucket: 'refuge-d2418.appspot.com',
      messagingSenderId: '115368666273',
      appId: '1:115368666273:web:a7e840b2a34527ee9e3ce0',
      measurementId: 'G-S48FW6R2BT'
    })
  }, []);

  const dispatch = useDispatch(); 
  const signInUser = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    const user = await postLogin(username.value, password.value);
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
