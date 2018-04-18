import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';
import { postLogout } from '../../ApiCalls/postLogout';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import { Breath } from '../../Components/Breath/Breath';
import { Mindfulness } from '../../Components/Mindfulness/Mindfulness';
import { Sound } from '../../Components/Sound/Sound';
import { Journal } from '../../Components/Journal/Journal';
import { Videos } from '../../Components/Videos/Videos';
import { Lifeline } from '../../Components/Lifeline/Lifeline';
import { getFitbitProfile } from '../../ApiCalls/getFitbitProfile';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getSteps } from '../../ApiCalls/getSteps';
import { LoginContainer } from '../LoginContainer/LoginContainer';
import Main from '../Main/Main';
import * as Actions from '../../Actions/index';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  async componentWillReceiveProps(nextProps) {
    const { loggedIn, heartRate } = this.props;
    if (heartRate.length) {
      return;
    }
    if (loggedIn !== nextProps.loggedIn) {
      const fitbitData = await getFitbitProfile();
      const userData = {
        user: fitbitData.user.displayName,
        avgSteps: fitbitData.user.averageDailySteps
      };
      this.props.addFitBitData(userData);
      const rawHeartRate = await getHeartRate();
      const rawStepData = await getSteps();
      const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
      const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
      const restingHeart = rawHeartRate['activities-heart'][0].value;
      this.props.addHeartRate(heartRate);
      this.props.addRestingHeart(restingHeart);
      this.props.addStepsTaken(stepsTaken);
      // if (!props.loggedIn){
      //   console.log('Stopping the fetch calls!!! FINALLY!!!');
      //   stopFetchCalls();
      // }

      // if (!props.loggedIn){
      //   console.log('in the first if');
      //   return;
      // } else {
      //   console.log(props.loggedIn);
      //   console.log('running the fetch stuff now');
      //   minuteFetchCalls = setInterval(function(){ runFetchCalls(); }, 60000);

      // }
    }
  }

  handleLogout = () => {
    postLogout();
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    console.log(this.props.loggedIn);
    
    const loggedIn = this.props.loggedIn ? (
      <Route
        exact
        path="/"
        render={() => <Main setIntervalFun={this.setIntervalFun} />}
      />
    ) : (
      <Route exact path="/" render={() => <LoginContainer />} />
    );

    return (
      <section className="App">
        <header className="App-header">
          <NavLink className="logo-wrap" to="/">
            <img
              alt="Icon"
              className="logo"
              src={require('../../Assets/images/MainLogo.svg')}
            />
          </NavLink>
          <div className="account">
            <a role="button" className="logout-btn" onClick={this.handleLogout}>
              Logout
            </a>
          </div>
        </header>
        {loggedIn}
        <Switch>
          <Route exact path="/login" render={() => <LoginContainer />} />
          <Route exact path="/breathing" render={() => <Breath />} />
          <Route exact path="/mindfulness" render={() => <Mindfulness />} />
          <Route exact path="/sound" render={() => <Sound />} />
          <Route exact path="/journal" render={() => <Journal />} />
          <Route exact path="/videos" render={() => <Videos />} />
          <Route exact path="/support" render={() => <Lifeline />} />
        </Switch>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  fitbitData: state.fitbitData,
  heartRate: state.heartRate,
  stepsTaken: state.stepsTaken,
  user: state.user,
  loggedIn: state.loggedIn
});

export const mapDispatchToProps = dispatch => ({
  addFitBitData: data => dispatch(Actions.addFitBitData(data)),
  addHeartRate: heartRate => dispatch(Actions.addHeartRate(heartRate)),
  addStepsTaken: stepsTaken => dispatch(Actions.addStepsTaken(stepsTaken)),
  addRestingHeart: restingHeart =>
    dispatch(Actions.addRestingHeart(restingHeart)),
  logoutUser: () => dispatch(Actions.logoutUser())
});

App.propTypes = {
  logoutUser: func,
  history: object,
  loggedIn: bool
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
