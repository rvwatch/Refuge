import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import env from './env.js';
import '../LoginContainer.css';
// import { postLogin } from '../../../ApiCalls/postLogin';
// import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import * as Actions from '../../../Actions/';

const NewSignIn = () => {
  useEffect( () => {
    firebase.initializeApp({
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      projectId: env.projectId,
      storageBucket: env.storageBucket,
      messagingSenderId: env.messagingSenderId,
      appId: env.appId,
      measurementId: env.measurementId
    });
  }, []);
  let history = useHistory();

  const [input, setInput] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => 
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });

  const signInUser = async event => {
    setError('');
    event.preventDefault();
    const { email, password } = input;
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('response', response);
      const result = await response.json()
      console.log('result', result)
    } catch (error) {
      setError(error.message);
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch (error) {
        console.log('in second catch');
        setError(error.message);
      }
    }
    
    setLoggedIn(current => !current);
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
          type='text'
          placeholder="email"
          name="email"
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
        {error}
      </div>
      <div>
        <input className="submit-btn" type="submit" value="Sign-In" />
      </div>
    </form>
  );
};
export default NewSignIn;
