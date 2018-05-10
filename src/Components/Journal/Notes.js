import React from 'react';
import './Journal.css';

const Notes = ({ desc }) => {
  return (
    <article className='note-wrap'>
      <p>{desc}</p>
    </article>
  )
}

export default Notes;