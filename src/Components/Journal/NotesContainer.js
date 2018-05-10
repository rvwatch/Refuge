import React from 'react';
import './Journal.css';
import Notes from './Notes';

const NotesContainer = ({notes}) => {
  const renderNotes = notes.length ? notes.map(note => <Notes {...note} key={note.title} />) : '';
  return (
    <section>
      {renderNotes}
    </section>
  )
};

export default NotesContainer;