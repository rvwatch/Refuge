import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../Actions/';
import { postRegister } from '../../../ApiCalls/postRegister';
import { object, func } from 'prop-types';
import { withRouter } from 'react-router-dom';

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  registerUser = async event => {
    event.preventDefault();
    const { email, password, name } = this.state;
    const user = await postRegister(email, password, name);
    this.props.addUser(user);
    this.props.setLoggedIn();
    this.props.history.push('/');
  };

  render() {
    return (
      <form className="NewUser-form" onSubmit={this.registerUser}>
        <h2>Create an Account</h2>
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="Username"
            name="name"
            value={this.state.name}
          />
        </div>
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
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

NewUser.propTypes = {
  target: object,
  addUser: func,
  setLoggedIn: func,
  history: object,
  addErrorMessage: func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewUser));
