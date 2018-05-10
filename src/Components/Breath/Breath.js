import React from 'react';
import {Link} from 'react-router-dom';
import './Breath.css';

export const Breath = () => {
  return (
    <section className='breathe-wrap'>
      
      <div className='box-breathing'></div>
      <header className='excercise-nav'>
        <Link to='/' className='prev'>dashboard</Link>
        <Link to='/mindfulness' className='next'>meditate</Link>
      </header>
    </section>
  ); 
};

