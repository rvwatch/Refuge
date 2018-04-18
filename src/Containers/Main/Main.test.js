import React from 'react';
import {Main, mapStateToProps, mapDispatchToProps} from './Main';
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

  it('should match snapshot when heartrate and stepstaken are empty', () => {
    const heartrate = [];
    const stepstaken = [];
    wrapper = shallow(<Main heartRate={heartRate} stepsTaken={stepsTaken} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should add heartRate data to props', () => {
      const expected = mock.mockHeartRate;
      const mockState = {heartRate: mock.mockHeartRate};
      const mapped = mapStateToProps(mockState);
      expect(mapped.heartRate).toEqual(expected);
    });

    it('should add stepsTaken data to props', () => {
      const expected = mock.mockStepsTaken;
      const mockState = {stepsTaken: mock.mockStepsTaken};
      const mapped = mapStateToProps(mockState);
      expect(mapped.stepsTaken).toEqual(expected);
    });
  });
});
