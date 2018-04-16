import React from 'react';
import { SignIn } from './SignIn/SignIn';
import {Link} from 'react-router-dom';
import './LoginContainer.css';

export const LoginContainer = () => {
  return (
    <article className='login-wrap'>
      <SignIn />
    </article>
  );
};
