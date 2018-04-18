import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Charts from '../Charts/Charts';
import { array, bool } from 'prop-types';
import * as Actions from '../../Actions/index';

export const Main = (props) => {
  
  const charts =
  props.heartRate.length && props.stepsTaken.length ?
    <Charts /> : <h2 className='loading'>Loading Charts</h2>;
  
  return (
    <section className='main-wrap'>
      {charts}
      <section className="therapies-wrap">
        <h2>therapies:</h2>
        <Link to="/breathing" className="breath">
          <h3>breathing exercises</h3>
          <img
            alt="Icon"
            className="lungs-icon"
            src={require('../../Assets/images/lungs.svg')}
          />
        </Link>
        <Link to="/mindfulness" className="mind">
          <h3>guided meditations</h3>
          <img
            alt="Icon"
            className="mindfulness-icon"
            src={require('../../Assets/images/meditation.svg')}
          />
        </Link>
        <Link to="/sound" className="sound">
          <h3>calming playlists</h3>
          <img
            alt="Icon"
            className="sound-icon"
            src={require('../../Assets/images/headphones.svg')}
          />
        </Link>
        <Link to="/journal" className="notes">
          <h3>journal</h3>
          <img
            alt="Icon"
            className="notes-icon"
            src={require('../../Assets/images/book.svg')}
          />
        </Link>
        <Link to="/videos" className="sight">
          <h3>relaxing videos</h3>
          <img
            alt="Icon"
            className="sight-icon"
            src={require('../../Assets/images/eyeglasses.svg')}
          />
        </Link>
        <a className="lifeline" href="tel:555-555-5555">
          <h3>support</h3>
          <img
            alt="Icon"
            className="phone-icon"
            src={require('../../Assets/images/call-answer.svg')}
          />
        </a>
        
      </section>
    </section>
  );
};

export const mapStateToProps = 
({heartRate, stepsTaken, loggedIn}) => ({heartRate, stepsTaken, loggedIn});


export const mapDispatchToProps = dispatch => ({
  addFitBitData: data => dispatch(Actions.addFitBitData(data)),
  addHeartRate: heartRate => dispatch(Actions.addHeartRate(heartRate)),
  addStepsTaken: stepsTaken => dispatch(Actions.addStepsTaken(stepsTaken)),
  addRestingHeart: restingHeart =>
    dispatch(Actions.addRestingHeart(restingHeart)),
  logoutUser: () => dispatch(Actions.logoutUser())
});

Main.propTypes = {
  heartRate: array,
  stepsTaken: array,
  loggedIn: bool
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
