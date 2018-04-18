import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { postLogout } from '../../ApiCalls/postLogout';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import { Breath } from '../../Components/Breath/Breath';
import { Mindfulness } from '../../Components/Mindfulness/Mindfulness';
import { Sound } from '../../Components/Sound/Sound';
import { Journal } from '../../Components/Journal/Journal';
import { Videos } from '../../Components/Videos/Videos';
import { Lifeline } from '../../Components/Lifeline/Lifeline';
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
  
  async componentDidUpdate() {
    const {user} = this.props;
    if (this.state.loggedIn){
      return;
    }
    if (user.username) {
      this.setState({
        loggedIn: true
      });
    }
  }

  handleLogout = () => {
    postLogout();
    this.props.logoutUser();
    this.setState({
      loggedIn: false
    }, this.props.history.push('/'));
  };

  render() {
    const loggedIn = this.state.loggedIn ? (
      <Route exact path="/" render={() => 
        <Main setIntervalFun={this.setIntervalFun} />} />
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
            <a role='button' 
              className='logout-btn' 
              onClick={this.handleLogout}>Logout
            </a>
            {/* <Link to="/login"> Login </Link> */}
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
  user: state.user
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
  history: object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
