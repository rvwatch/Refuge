import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../Actions/';
import { getCurrentUser } from '../../../ApiCalls/getCurrentUser';
import {object, array, string, func} from 'prop-types';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    };
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  signInUser = async () => {
    const currentUser = await getCurrentUser();
    console.log(currentUser);
    debugger;
  
    //props.addUser(currentUser);
  };

  render() {
    return (
      <form action="/login" method="post" onSubmit={this.signInUser}>
        <div>
          <input onChange={this.handleInput} type="text" placeholder='username' name='userName' value={this.state.userName} />
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

export default connect(null, mapDispatchToProps)(SignIn);
