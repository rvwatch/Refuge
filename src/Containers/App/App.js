import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../ApiCalls/fetchCall';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getSteps } from '../../ApiCalls/getSteps';
import {Route, Link, NavLink} from 'react-router-dom';
import * as Actions from '../../Actions/index';
import Charts from '../../Containers/Charts/Charts';

export class App extends Component {
  async componentDidMount() {
    const fitbitData = await fetchData();
    const rawHeartRate = await getHeartRate();
    const rawStepData = await getSteps();
    const userData = {
      user: fitbitData.user.displayName,
      avgSteps: fitbitData.user.averageDailySteps
    };
    const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
    const heartRate = rawHeartRate['activities-heart-intraday'].dataset;

    this.props.addFitBitData(userData);
    this.props.addHeartRate(heartRate);
    this.props.addStepsTaken(stepsTaken);
  }

  render() {
    const chart =
      this.props.heartRate.length && this.props.stepsTaken.length ? (
        <Charts />
      ) : (
        'Loading'
      );

    return (
      <div className="App">
        <header className="App-header">
          <Link className='logo-wrap' to='/'>
            <img className='logo' src={require('../../Assets/images/MainLogo.svg')} />
          </Link>
          <Link className='account' to='/settings'>
            Welcome, Ricardo V. 
          </Link>

        </header>
        {/* <section className="chart-wrap">{chart}</section> */}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  fitbitData: state.fitbitData,
  heartRate: state.heartRate,
  stepsTaken: state.stepsTaken
});

export const mapDispatchToProps = dispatch => ({
  addFitBitData: data => dispatch(Actions.addFitBitData(data)),
  addHeartRate: heartRate => dispatch(Actions.addHeartRate(heartRate)),
  addStepsTaken: stepsTaken => dispatch(Actions.addStepsTaken(stepsTaken))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
