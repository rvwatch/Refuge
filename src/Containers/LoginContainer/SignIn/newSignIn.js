import React, { useEffect, useState } from 'react';
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
    });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const dispatch = useDispatch(); 
  const signInUser = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log('====================================');
    console.log({[name]: value});
    console.log('====================================');

    // const { username, password } = event.target;
    setUsername({[name]: value});
    // setPassword(password.value);
    // dispatch(Actions.addUser(user));
  };

  return (
    <form className="signin-form" onSubmit={signInUser}>
      <h2>Sign-In</h2>
      <div>
        <input
          onChange={signInUser}
          type="text"
          placeholder="email"
          name="username"
          value={username}
        />
      </div>
      <div>
        <input
          onChange={signInUser}
          type="password"
          placeholder="password"
          name="password"
          value={password}
        />
      </div>
      <div>
        <input className="submit-btn" type="submit" value="enter" />
      </div>
    </form>
  );
}



export default NewSignIn;
