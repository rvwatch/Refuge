import React from 'react';
import NewUser from './NewUser/NewUser';
import '../LoginContainer/LoginContainer.css';

export const RegisterContainer = () => {
  return (
    <article className='login-wrap'>
      <NewUser />
    </article>
  );
};
