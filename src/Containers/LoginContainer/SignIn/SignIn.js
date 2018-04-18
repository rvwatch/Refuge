import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../Actions/';
import { postLogin } from '../../../ApiCalls/postLogin';
import { object, func } from 'prop-types';
import { withRouter } from 'react-router-dom';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  signInUser = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const user = await postLogin(username, password);
    this.props.addUser(user);
    this.props.setLoggedIn();
    this.props.history.push('/');
    if (user.error) {
      throw new Error('Login error');
    }
  };

  render() {
    return (
      <form className="signin-form" onSubmit={this.signInUser}>
        <h2>Sign-In</h2>
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
          />
        </div>
        <div>
          <input
            onChange={this.handleInput}
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
          />
        </div>
        <div>
          <input className="submit-btn" type="submit" value="enter" />
        </div>
      </form>
    );
  }
}

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(Actions.addUser(user)),
  setLoggedIn: () => dispatch(Actions.setLoggedIn()),
  addErrorMessage: error => dispatch(Actions.addErrorMessage(error))
});

SignIn.propTypes = {
  target: object,
  addUser: func,
  setLoggedIn: func,
  history: object,
  addErrorMessage: func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
