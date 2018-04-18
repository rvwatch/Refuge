import React, {Component} from 'react';
import './Journal.css';

export class Journal extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      description: ''
    };
  }

  handleInputs = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  addNote = () => {
    console.log();
    
  }

  render () {
    return (
      <section>
        <header>
          <h1 className='coming-soon'>Coming Soon!</h1>
          <form className='journal-form'>
            <input type='text' placeholder='Title' value={this.state.title} />
            <textarea placeholder='Description' value={this.state.description}></textarea>
            <button>add entry</button>
          </form>
        </header>
        <section>
          <article className='note-wrap'>
            <h1>Title</h1>
            <p>Description text</p>
            <button className='delete-note'>x</button>
          </article>
        </section>
      </section>
    ); 
  }
}

