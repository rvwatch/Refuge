import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as Actions from '../../Actions/';

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
    const mockfitbitData = {
      user: 'Ricardo V.',
      avgSteps: 4356
    };
    const expected = mockfitbitData;
    const mockState = {fitbitData: mockfitbitData};
    const mapped = mapStateToProps(mockState);
    expect(mapped.fitbitData).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params in addFitBitData', () => {
    const mockDispatch = jest.fn();
    const mockfitbitData = {
      user: 'Ricardo V.',
      avgSteps: 4356
    };
    const expected = Actions.addFitBitData(mockfitbitData);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFitBitData(mockfitbitData);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
