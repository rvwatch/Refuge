import React from 'react';
import { shallow } from 'enzyme';
import { Charts, mapStateToProps, chartData} from './Charts';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('Charts', () => {
  let wrapper;
  let heartRate;
  let stepsTaken;
  beforeEach(() => {
    stepsTaken = mock.mockStepsTaken;
    heartRate = mock.mockHeartRate;
    wrapper = shallow(<Charts heartRate={heartRate} stepsTaken={stepsTaken} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should clean heartRate data', () => {
    const results = chartData(mock.mockHeartRate);
    const expected = mock.mockChartData;
    expect(results).toEqual(expected);
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

    it('should add restingHeartRate data to props', () => {
      const expected = mock.restingHeartRate;
      const mockState = { restingHeart: mock.restingHeartRate };
      const mapped = mapStateToProps(mockState);
      expect(mapped.restingHeart).toEqual(expected);
    });
  });

  
});

