import React from 'react';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Charts from '../Charts/Charts';
import { array } from 'prop-types';
import { Breath } from '../../Components/Breath/Breath';
import { Mindfulness } from '../../Components/Mindfulness/Mindfulness';
import { Sound } from '../../Components/Sound/Sound';
import { Journal } from '../../Components/Journal/Journal';
import { Videos } from '../../Components/Videos/Videos';
import { Lifeline } from '../../Components/Lifeline/Lifeline';
import { LoginContainer } from '../LoginContainer/LoginContainer';

export const Main = (props) => {
  
  const charts =
  props.heartRate.length && props.stepsTaken.length ?
    <Charts /> : 'Loading';

  return (
    <div>
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
        <Link to="/support" className="lifeline">
          <h3>support</h3>
          <img
            alt="Icon"
            className="phone-icon"
            src={require('../../Assets/images/call-answer.svg')}
          />
        </Link>
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
