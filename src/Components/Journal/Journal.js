import React, { Component } from 'react';
import './Journal.css';
import NotesContainer from './NotesContainer';
import NotesControl from './NotesControl';


export class Journal extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  addNote = (note) => {
    const newNote = {...note, id: Date.now()};
    const notes = [...this.state.notes, newNote];
    this.setState({ notes });
  }

  render() {
    return (
      <section className='journal-form'>
        <header>
          <NotesControl addNote={ this.addNote } />
        </header>
        <NotesContainer notes={this.state.notes} />
      </section>
    );
  }
}
