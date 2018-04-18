import * as Actions from './index';
import * as mock from '../MockData/';

describe('addUser', () => {
  it('should create addUser action object', () => {
    const mockUser = mock.mockUser;
    const expected = {
      type: 'ADD_USER',
      mockUser
    };
    const result = Actions.addUser(mockUser);
    expect(result).toEqual(expected);
  });
});

describe('setLoggedIn', () => {
  it('should create setLoggedIn action object', () => {
    const expected = {
      type: 'SET_LOGGED_IN'
    };
    const result = Actions.setLoggedIn();
    expect(result).toEqual(expected);
  });
});

describe('logoutUser', () => {
  it('should create logoutUser action object', () => {
    const expected = {
      type: 'LOGOUT_USER'
    };
    const result = Actions.logoutUser();
    expect(result).toEqual(expected);
  });
});

describe('addFitBitData', () => {
  it('should create addFitBitData action object', () => {
    const mockFitBitData = mock.mockFitbitProfile;
    const expected = {
      type: 'ADD_FITBIT_DATA',
      user: mockFitBitData
    };
    const result = Actions.addFitBitData(mockFitBitData);
    expect(result).toEqual(expected);
  });
});

describe('addHeartRate', () => {
  it('should create addHeartRate action object', () => {
    const mockHeartRate = 65;
    const expected = {
      type: 'ADD_HEART_RATE',
      heartRate: mockHeartRate
    };
    const result = Actions.addHeartRate(mockHeartRate);
    expect(result).toEqual(expected);
  });
});

describe('addStepsTaken', () => {
  it('should create addStepsTaken action object', () => {
    const steps = mock.mockStepsTaken;
    const expected = {
      type: 'ADD_STEPS_TAKEN',
      steps
    };
    const result = Actions.addStepsTaken(steps);
    expect(result).toEqual(expected);
  });
});

describe('addRestingHeart', () => {
  it('should create addRestingHeart action object', () => {
    const restingHeart = mock.restingHeartRate;
    const expected = {
      type: 'ADD_RESTING_HEART',
      restingHeart
    };
    const result = Actions.addRestingHeart(restingHeart);
    expect(result).toEqual(expected);
  });
});