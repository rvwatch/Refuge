import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFitbitProfile } from '../../ApiCalls/getFitbitProfile';
import { getHeartRate } from '../../ApiCalls/getHeartRate';
import { getCurrentUser } from '../../ApiCalls/getCurrentUser';
import { postLogout } from '../../ApiCalls/postLogout';
import { getSteps } from '../../ApiCalls/getSteps';
import { Route, NavLink, Switch, withRouter, Link } from 'react-router-dom';
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
  // async componentDidMount() {
  //   console.log('in the mount');

  //   if (this.props.user && this.props.user.length) {
  //     console.log('in the if in the mount');

  //     const fitbitData = await getFitbitProfile();
  //     const userData = {
  //       user: fitbitData.user.displayName,
  //       avgSteps: fitbitData.user.averageDailySteps
  //     };
  //     this.props.addFitBitData(userData);
  //     const rawHeartRate = await getHeartRate();
  //     const rawStepData = await getSteps();
  //     const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
  //     const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
  //     const restingHeart = rawHeartRate['activities-heart'][0].value;
  //     this.props.addHeartRate(heartRate);
  //     this.props.addRestingHeart(restingHeart);
  //     this.props.addStepsTaken(stepsTaken);
  //   }
  // }

  


  async componentDidUpdate() {
    const {user} = this.props;
    if (this.state.loggedIn){
      return;
    }
    if (user.username) {
      console.log('Updated!');
      this.setState({
        loggedIn: true
      });
    }
    
  }


    // function myStopFunction() {
    //   clearInterval(myVar);
    // }

    // let count = 0;
    // let myVar;
    // const fetchConditions = this.state.loggedIn && 
    //   heartRate !== nextProps.heartRate ?  
    //   myVar = setInterval(function(){ runFetchCalls(); }, 2000) 
    //   : myStopFunction();

    // fetchConditions();

    // function runFetchCalls() {
    //   console.log('fetching');
    //   count++;
    //   console.log(count)
    //   if (count > 4){
    //     console.log('Im counting now!')
    //     myStopFunction()
    //   }
    // }
    // myVar;
  //}



    
    
    

    // if (!user.username){
    //   return;
    // }
    // if (
    //   this.state.loggedIn && heartRate !== nextProps.heartRate
    // ) {
    //   let self = this;
    //     self.minuteFetchCall = setTimeout(async() => {
    //     console.log('running setTimeout!');
        
    //     console.log('2 more fetches run');
    // }, 60 * 1000);

      
    // }


    



  // async componentDidUpdate(){
  //   if (this.props.user.username && this.props.user.username && this.props.heartRate && !this.props.heartRate.length){
  //     console.log('in the did update');

  //     const fitbitData = await getFitbitProfile();
  //     const userData = {
  //       user: fitbitData.user.displayName,
  //       avgSteps: fitbitData.user.averageDailySteps
  //     };
  //     this.props.addFitBitData(userData);
  //     const rawHeartRate = await getHeartRate();
  //     const rawStepData = await getSteps();
  //     const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
  //     const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
  //     const restingHeart = rawHeartRate['activities-heart'][0].value;
  //     this.props.addHeartRate(heartRate);
  //     this.props.addRestingHeart(restingHeart);
  //     this.props.addStepsTaken(stepsTaken);
  //   }
  // }

  // async componentWillReceiveProps(nextProps) {
  //   console.log('receiving props');

  //   if (this.props.heartRate && this.props.heartRate !== nextProps.heartRate)  {
  //     console.log('in the if for willReceive!');

  //     let self = this;
  //     setTimeout(async function() {
  //       const rawHeartRate = await getHeartRate();
  //       const rawStepData = await getSteps();
  //       const stepsTaken = rawStepData['activities-steps-intraday'].dataset;
  //       const heartRate = rawHeartRate['activities-heart-intraday'].dataset;
  //       const restingHeart = rawHeartRate['activities-heart'][0].value;
  //       self.props.addHeartRate(heartRate);
  //       self.props.addRestingHeart(restingHeart);
  //       self.props.addStepsTaken(stepsTaken);
  //     }, 60 * 1000);
  //   }
  // }

  handleLogout = () => {
    const loggedOut = postLogout();
    this.props.logoutUser();
    this.setState({
      loggedIn: false
    }, this.props.history.push('/'));
  };

  render() {
    const { heartRate, stepsTaken, user } = this.props;
    const loggedIn = this.state.loggedIn ? (
      <Route exact path="/" render={() => <Main setIntervalFun={this.setIntervalFun} />} />
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
            <a href="#" onClick={this.handleLogout}>Logout</a>
            <Link to="/login"> Login </Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
