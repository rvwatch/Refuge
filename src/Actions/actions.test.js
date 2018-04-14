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
    const mockFitBitData = 'Ricardo V.';
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
    const mockStepsTaken = [
      { time: '14:02:00', value: 51 },
      { time: '14:03:00', value: 67 },
      { time: '14:04:00', value: 29 },
      { time: '14:05:00', value: 68 },
      { time: '14:06:00', value: 76 }
    ];
    const expected = {
      type: 'ADD_STEPS_TAKEN',
      steps: mockStepsTaken
    };
    const result = Actions.addStepsTaken(mockStepsTaken);
    expect(result).toEqual(expected);
  });
});
