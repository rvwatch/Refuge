import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../ApiCalls/fetchCall';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getSteps } from '../../ApiCalls/getSteps';
import { Route, Link, NavLink } from 'react-router-dom';
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
      <section className="App">
        <header className="App-header">
          <Link className="logo-wrap" to="/">
            <img
              className="logo"
              src={require('../../Assets/images/MainLogo.svg')}
            />
          </Link>
          <Link className="account" to="/settings">
            Welcome, Ricardo V.
          </Link>
        </header>

        <section className="chart-wrap">
          <h2>heart rate:</h2>
          {chart}
        </section>
        <section className='therapies-wrap'>
          <h2>therapies:</h2>
          <article className='breath'>
            <h3>breath</h3>
            <img
              className="lungs-icon"
              src={require('../../Assets/images/lungs.svg')}
            />
            <p></p>
          </article>
          <article className='mind'>
            <h3>mindfulness</h3>
            <img
              className="mindfulness-icon"
              src={require('../../Assets/images/meditation.svg')}
            />
          </article>
          <article className='sound'>
            <h3>sound</h3>
            <img
              className="sound-icon"
              src={require('../../Assets/images/headphones.svg')}
            />
          </article>
          <article className='notes'>
            <h3>notes</h3>
            <img
              className="notes-icon"
              src={require('../../Assets/images/book.svg')}
            />
          </article>
          <article className='sight'>
            <h3>sight</h3>
            <img
              className="sight-icon"
              src={require('../../Assets/images/eyeglasses.svg')}
            />
          </article>
          <article className='lifeline'>
            <h3>lifeline</h3>
            <img
              className="phone-icon"
              src={require('../../Assets/images/call-answer.svg')}
            />
          </article>
        </section>
      </section>
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
