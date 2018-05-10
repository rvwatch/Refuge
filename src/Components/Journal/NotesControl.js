import React, { Component } from 'react';
import './Journal.css';

class NotesControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='journal-control-form' style={{textAlign:'left'}} onSubmit={this.handleSubmit} >
        <label>
          <textarea
            onChange={ this.handleInput }
            name="desc"
            type="text"
            value={ this.state.desc }
            placeholder="journal entry">
          </textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NotesControl;
