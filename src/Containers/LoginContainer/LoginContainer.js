import React from 'react';
import SignIn from './SignIn/SignIn';
import './LoginContainer.css';

export const LoginContainer = () => {
  return (
    <article className='login-wrap'>
      <SignIn />
    </article>
  );
};
