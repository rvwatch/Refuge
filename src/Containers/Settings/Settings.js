import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import './Settings.css';

export class Settings extends Component {
  constructor(){
    super();
    this.state = {
      heartRateChart: false
    };
  }

  toggleHeartRateDisplay = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const value = name === 'heartRateChart' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <article>
        <h1>user settings</h1>

        <form>
          <input name='heartRateChart' type='checkbox' checked={this.state.display} onChange={this.toggleHeartRateDisplay} className='ios8-switch ios8-switch-lg' id='checkbox-3' />
          <label htmlFor='checkbox-3'>display heart rate data</label>
          <button className="btn btn-default" type="submit">Save</button>
        </form>
        
        
      </article>
    );
  }
}

Settings.propTypes = {
  user: object
};


export const mapStateToProps = ({user}) => ({user});




export default connect(mapStateToProps, null)(Settings);