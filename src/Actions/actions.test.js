import * as Actions from './index';

describe('addUser', () => {
  it('should create addUser action object', () => {
    const mockUser = 'Ricardo';
    const expected = {
      type: 'ADD_USER',
      user: mockUser
    };
    const result = Actions.addUser(mockUser);
    expect(result).toEqual(expected);
  });
});

describe('addFitBitData', () => {
  it('should create addFitBitData action object', () => {
    const mockFitBitUser = 'Ricardo V.';
    const expected = {
      type: 'ADD_FITBIT_USER',
      user: mockFitBitUser
    };
    const result = Actions.addFitBitUser(mockFitBitUser);
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
