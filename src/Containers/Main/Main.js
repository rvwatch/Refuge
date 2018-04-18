import React from 'react';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Charts from '../Charts/Charts';
import { array } from 'prop-types';
import { LoginContainer } from '../LoginContainer/LoginContainer';

export const Main = (props) => {
  
  const setIntervalFun = () => {
    console.log('in the fun times!!!');
    
    let minuteFetchCalls;

    function stopFetchCalls() {
      clearInterval(minuteFetchCalls);
    }
    
    const runFetchCalls = async () => {
      console.log('fetching');
      
      // const fitbitData = await getFitbitProfile();
      // const userData = {
      //   user: fitbitData.user.displayName,
      //   avgSteps: fitbitData.user.averageDailySteps
      // };
      // this.props.addFitBitData(userData);
      // const rawHeartRate = await getHeartRate();
      // const rawStepData = await getSteps();
      // const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
      // const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
      // const restingHeart = rawHeartRate['activities-heart'][0].value;
      // this.props.addHeartRate(heartRate);
      // this.props.addRestingHeart(restingHeart);
      // this.props.addStepsTaken(stepsTaken);
      if (!this.state.loggedIn){
        console.log('Stopping the fetch calls!!! FINALLY!!!');
        stopFetchCalls();
      }
    };
    

    if (!this.state.loggedIn){
      console.log('in the first if');
      
      return;
    } else {
      console.log(this.state.loggedIn);
      console.log('running the fetch stuff now');
      minuteFetchCalls = setInterval(function(){ runFetchCalls(); }, 2000);
    
    }
  }


  const charts =
  props.heartRate.length && props.stepsTaken.length ?
    <Charts /> : 'Loading';
  console.log(props);
  
  return (
    <div>
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
    </div>
  );
};

export const mapStateToProps = 
({heartRate, stepsTaken}) => ({heartRate, stepsTaken});

Main.propTypes = {
  heartRate: array,
  stepsTaken: array
};

export default withRouter(connect(mapStateToProps, null)(Main));
