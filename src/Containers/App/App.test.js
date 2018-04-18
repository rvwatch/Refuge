import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('App', () => {
  let wrapper;
  let addFitBitData;
  let addHeartRate;
  let addStepsTaken;
  let history;
  let logoutUser;
  let postLogout;
  let handleLogout;
  beforeEach(() => {
    postLogout = jest.fn();
    handleLogout = jest.fn();
    logoutUser = jest.fn();
    history = {};
    addFitBitData = jest.fn();
    addHeartRate = jest.fn();
    addStepsTaken = jest.fn();
    wrapper = shallow(
      <App
        handleLogout={handleLogout}
        history={history}
        logoutUser={logoutUser}
        addFitBitData={addFitBitData}
        addHeartRate={addHeartRate}
        addStepsTaken={addStepsTaken}
        postLogout={postLogout}
        user={mock.user}
      />,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should logout a user', () => {

    wrapper.state().loggedIn = true;
    expect(wrapper.state().loggedIn).toEqual(true);
    const spy = jest.spyOn(wrapper.instance(), 'handleLogout'); 
    wrapper.update(); 
    wrapper.instance('handleLogout'); 
    expect(spy).toHaveBeenCalled();
  });

});

describe('mapStateToProps', () => {
  it('should add fitbit data to props', () => {
    const mockfitbitData = mock.mockFitbitProfile;
    const expected = mockfitbitData;
    const mockState = { fitbitData: mockfitbitData };
    const mapped = mapStateToProps(mockState);
    expect(mapped.fitbitData).toEqual(expected);
  });

  it('should add heartRate data to props', () => {
    const mockHeartRate = mock.mockHeartRate;
    const expected = mockHeartRate;
    const mockState = { heartRate: mockHeartRate };
    const mapped = mapStateToProps(mockState);
    expect(mapped.heartRate).toEqual(expected);
  });

  it('should add stepsTaken data to props', () => {
    const mockStepsTaken = mock.mockStepsTaken;
    const expected = mockStepsTaken;
    const mockState = { stepsTaken: mockStepsTaken };
    const mapped = mapStateToProps(mockState);
    expect(mapped.stepsTaken).toEqual(expected);
  });

  it('should add user to props', () => {
    const mockUser = mock.user;
    const expected = mockUser;
    const mockState = { user: mockUser };
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params in addFitBitData', () => {
    const mockDispatch = jest.fn();
    const mockfitbitData = mock.mockFitbitProfile;
    const expected = Actions.addFitBitData(mockfitbitData);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFitBitData(mockfitbitData);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params in addHeartRate', () => {
    const mockDispatch = jest.fn();
    const mockHeartRate = mock.mockHeartRate;
    const expected = Actions.addHeartRate(mockHeartRate);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addHeartRate(mockHeartRate);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params in addStepsTaken', () => {
    const mockDispatch = jest.fn();
    const mockStepsTaken = mock.mockStepsTaken;
    const expected = Actions.addStepsTaken(mockStepsTaken);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addStepsTaken(mockStepsTaken);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params in addRestingHeart', () => {
    const mockDispatch = jest.fn();
    const restingHeartRate = mock.restingHeartRate;
    const expected = Actions.addRestingHeart(restingHeartRate);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRestingHeart(restingHeartRate);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch for logoutUser action', () => {
    const mockDispatch = jest.fn();
    const expected = Actions.logoutUser();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logoutUser();
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
