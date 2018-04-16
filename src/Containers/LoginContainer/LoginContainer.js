import React from 'react';
import { SignIn } from './SignIn/SignIn';
import {Link} from 'react-router-dom';

export const LoginContainer = () => {
  return (
    <article>
     <a href='http://localhost:3000/logout'>Logout</a>
      <SignIn />
    </article>
  );
};
