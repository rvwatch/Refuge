import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';
import { postLogout } from '../../ApiCalls/postLogout';
import { Route, NavLink, Switch, withRouter, Link } from 'react-router-dom';
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
import { RegisterContainer } from '../RegisterContainer/RegisterContainer';
import { Settings } from '../Settings/Settings';
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
    }
  }

  handleLogout = () => {
    postLogout();
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {

    const { name } = this.props.user;
    

    const loginPath = this.props.loggedIn ? (
      <Route
        exact
        path="/"
        render={() => <Main setIntervalFun={this.setIntervalFun} />}
      />
    ) : (
      <Route exact path="/" render={() => <LoginContainer />} />
    );

    const welcomeLink = this.props.loggedIn ? <Link to="/settings">{name}</Link> :  
    <div><Link to='/login'>Sign-In </Link> <Link to='/register'> New User</Link></div>;


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
            {welcomeLink}<br />
            
          </div>
        </header>
        {loginPath}
        <Switch>
        <Route exact path="/register" component={RegisterContainer} />
          <Route path ='/settings' component={Settings} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/breathing" component={Breath} />
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
  loggedIn: bool,
  addFitBitData: func,
  addHeartRate: func,
  addRestingHeart: func,
  addStepsTaken: func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
