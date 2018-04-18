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
  beforeEach(() => {
    addFitBitData = jest.fn();
    addHeartRate = jest.fn();
    addStepsTaken = jest.fn();
    wrapper = shallow(
      <App
        addFitBitData={addFitBitData}
        addHeartRate={addHeartRate}
        addStepsTaken={addStepsTaken}
      />,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
