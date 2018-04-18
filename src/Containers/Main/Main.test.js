import React from 'react';
import { Main, mapStateToProps, mapDispatchToProps } from './Main';
import { shallow } from 'enzyme';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('Main', () => {
  let heartRate;
  let stepsTaken;
  let wrapper;
  beforeEach(() => {
    heartRate = mock.mockHeartRate;
    stepsTaken = mock.mockStepsTaken;
    wrapper = shallow(<Main heartRate={heartRate} stepsTaken={stepsTaken} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    const heartRate = [];
    const stepsTaken = [];
    wrapper = shallow(<Main heartRate={heartRate} stepsTaken={stepsTaken} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should add heartRate data to props', () => {
      const expected = mock.mockHeartRate;
      const mockState = { heartRate: mock.mockHeartRate };
      const mapped = mapStateToProps(mockState);
      expect(mapped.heartRate).toEqual(expected);
    });

    it('should add stepsTaken data to props', () => {
      const expected = mock.mockStepsTaken;
      const mockState = { stepsTaken: mock.mockStepsTaken };
      const mapped = mapStateToProps(mockState);
      expect(mapped.stepsTaken).toEqual(expected);
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
});
