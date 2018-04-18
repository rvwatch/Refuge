import React from 'react';
import {SignIn, mapStateToProps, mapDispatchToProps} from './SignIn';
import {shallow} from 'enzyme';
import * as Actions from '../../../Actions';
import {postLogin} from '../../../ApiCalls/postLogin';
import * as mock from '../../../MockData/';
jest.mock('../../../ApiCalls/postLogin.js');

describe('SignIn', () => {

  let wrapper;
  let mockpostNewUser;
  let preventDefault;
  let addUser;
  let setLoggedIn; 
  let history;
  beforeEach(() => {
    history = [];
    preventDefault = jest.fn();
    mockpostNewUser = jest.fn();
    addUser = jest.fn();
    setLoggedIn = jest.fn();
    wrapper = shallow(<SignIn 
      history={history} 
      addUser={addUser} 
      setLoggedIn={setLoggedIn} 
      preventDefault={preventDefault} 
      postNewUser={mockpostNewUser} 
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should add a new user', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    const spy = jest.spyOn(wrapper.instance(), 'signInUser'); 
    wrapper.update(); 
    wrapper.instance().signInUser(mockEvent);
    expect(spy).toHaveBeenCalled();
  });
 
  it('should call postLogin', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().signInUser(mockEvent);
    expect(postLogin).toHaveBeenCalled();
  });

  it('should addUser to the store', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().signInUser(mockEvent);
    expect(addUser).toHaveBeenCalled();
  });

  it('should setLoggedIn to the store', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    await wrapper.instance().signInUser(mockEvent);
    expect(setLoggedIn).toHaveBeenCalled();
  });

});

describe('mapStateToProps', () => {
  it('should add user data to props', () => {
    const expected = mock.user;
    const mockState = { user: mock.user };
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  });

});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params in addUser', () => {
    const mockDispatch = jest.fn();
    const user = mock.user;
    const expected = Actions.addUser(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addUser(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params in setLoggedIn', () => {
    const mockDispatch = jest.fn();
    const expected = Actions.setLoggedIn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setLoggedIn();
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params in addErrorMessage', () => {
    const mockDispatch = jest.fn();
    const mockError = 'error';
    const expected = Actions.addErrorMessage(mockError);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addErrorMessage(mockError);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

});

