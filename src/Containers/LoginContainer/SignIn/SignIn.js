import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../Actions/';
import { postLogin } from '../../../ApiCalls/postLogin';
import {object} from 'prop-types';
import { withRouter } from 'react-router-dom';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  signInUser = async (event) => {
    event.preventDefault();
    const { username, password} = this.state;

    const user = await postLogin(username, password);
    if (user.error){
      console.log(user.error);
      return;
    }
    this.props.addUser(user);
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.signInUser}>
        <div>
          <input onChange={this.handleInput} type="text" placeholder='username' name='username' value={this.state.username} />
        </div>
        <div>
          <input onChange={this.handleInput} type="password" placeholder='password' name='password' value={this.state.password} />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}



export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(Actions.addUser(user))
});

SignIn.propTypes = {
  target: object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
