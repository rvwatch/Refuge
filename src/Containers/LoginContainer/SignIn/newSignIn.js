import React, { useEffect, useState } from 'react';
// import firebase from 'firebase';
import '../LoginContainer.css';
// import { postLogin } from '../../../ApiCalls/postLogin';
// import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import * as Actions from '../../../Actions/';

const NewSignIn = () => {
  // useEffect( () => {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyAcxCaic7ghfcSvxLbWeKUed3nmFNXaiME',
  //     authDomain: 'refuge-d2418.firebaseapp.com',
  //     projectId: 'refuge-d2418',
  //     storageBucket: 'refuge-d2418.appspot.com',
  //     messagingSenderId: '115368666273',
  //     appId: '1:115368666273:web:a7e840b2a34527ee9e3ce0',
  //     measurementId: 'G-S48FW6R2BT'
  //   });
  // }, []);
  let history = useHistory();

  const [input, setInput] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => 
  setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });

  const signInUser = async event => {
    event.preventDefault();
    const { username, password } = input;
    console.log(username);
    console.log(password);
    setLoggedIn(current => !current);
    console.log(loggedIn);
    history.push('/');
    // const user = await postLogin(username, password);
    // this.props.addUser(user);
    // this.props.setLoggedIn();
    // this.props.history.push('/');
  };

  useEffect( () => {
    console.log(loggedIn);
}, [loggedIn]);

  return (
    <form className="signin-form" onSubmit={signInUser}>
      <h2>Sign-In</h2>
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          name="username"
        />
      </div>
      <div>
        <input
          onChange={handleInputChange}
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
};
export default NewSignIn;
