import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../ApiCalls/fetchCall';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getCurrentUser } from '../../ApiCalls/getCurrentUser';
import { getSteps } from '../../ApiCalls/getSteps';
import {
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom';
import { Breath } from '../../Components/Breath/Breath';
import { Mindfulness } from '../../Components/Mindulness/Mindfulness';
import { Sound } from '../../Components/Sound/Sound';
import { Journal } from '../../Components/Journal/Journal';
import { Videos } from '../../Components/Videos/Videos';
import { Lifeline } from '../../Components/Lifeline/Lifeline';
import Main from '../../Components/Main/Main';
import * as Actions from '../../Actions/index';
import { LoginContainer } from '../LoginContainer/LoginContainer';

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
    const currentUser = await getCurrentUser();
    this.props.addUser(currentUser);
  }

  render() {
   
    const { heartRate, stepsTaken, user } = this.props;

    const loggedIn =
    user.username && heartRate.length && stepsTaken.length ? 
    <Route exact path='/' render={() => <Main /> } /> 
    : <Route exact path='/' render={() => <LoginContainer /> } />;

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
          <NavLink className="account" to="/login">
            Login
          </NavLink>
        </header>
        {loggedIn}
        <Switch>
          <Route exact path="/login" render={() => <LoginContainer />} />
          <Route exact path="/breathing" render={() => <Breath />} />
          <Route exact path="/mindfulness" component={Mindfulness} />
          <Route exact path="/sound" component={Sound} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/support" component={Lifeline} />
        </Switch>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  fitbitData: state.fitbitData,
  heartRate: state.heartRate,
  stepsTaken: state.stepsTaken,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addFitBitData: data => dispatch(Actions.addFitBitData(data)),
  addHeartRate: heartRate => dispatch(Actions.addHeartRate(heartRate)),
  addStepsTaken: stepsTaken => dispatch(Actions.addStepsTaken(stepsTaken)),
  addUser: user => dispatch(Actions.addUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
