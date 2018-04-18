import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Charts from '../Charts/Charts';
import { array, func } from 'prop-types';
import { getFitbitProfile } from '../../ApiCalls/getFitbitProfile';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getSteps } from '../../ApiCalls/getSteps';
import * as Actions from '../../Actions/index';

export const Main = (props) => {
  
  const setIntervalFun = () => {
    console.log('in the fun times!!!');
    
    let minuteFetchCalls;
    function stopFetchCalls() {
      clearInterval(minuteFetchCalls);
    }
    
    const runFetchCalls = async () => {
      console.log('fetching');
      
      const fitbitData = await getFitbitProfile();
      const userData = {
        user: fitbitData.user.displayName,
        avgSteps: fitbitData.user.averageDailySteps
      };
      props.addFitBitData(userData);
      const rawHeartRate = await getHeartRate();
      const rawStepData = await getSteps();
      const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
      const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
      const restingHeart = rawHeartRate['activities-heart'][0].value;
      props.addHeartRate(heartRate);
      props.addRestingHeart(restingHeart);
      props.addStepsTaken(stepsTaken);
      if (!props.loggedIn){
        console.log('Stopping the fetch calls!!! FINALLY!!!');
        stopFetchCalls();
      }
    };
    

    if (!props.loggedIn){
      console.log('in the first if');
      
      return;
    } else {
      console.log(props.loggedIn);
      console.log('running the fetch stuff now');
      minuteFetchCalls = setInterval(function(){ runFetchCalls(); }, 60000);
      
    }
  };


  const charts =
  props.heartRate.length && props.stepsTaken.length ?
    <Charts /> : <h2 className='loading'>Loading</h2>;
  console.log(props);
  
  return (
    <section className='main-wrap'>
      {charts}
      <section className="therapies-wrap">
        {setIntervalFun()}
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
        <Link to="/support" className="lifeline">
          <h3>support</h3>
          <img
            alt="Icon"
            className="phone-icon"
            src={require('../../Assets/images/call-answer.svg')}
          />
        </Link>
        
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
  loggedIn: func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
