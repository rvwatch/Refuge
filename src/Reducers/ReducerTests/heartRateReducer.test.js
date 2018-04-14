import heartRateReducer from '../heartRateReducer';
import * as Actions from '../../Actions/';

describe('heartRateReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(heartRateReducer(undefined, [])).toEqual(expected);
  });

  it('should add heartRate data to state', () => {
    const expected = [
      { time: '00:02:00', value: 62 },
      { time: '00:03:00', value: 62 },
      { time: '00:04:00', value: 62 },
      { time: '00:07:00', value: 62 },
      { time: '00:08:00', value: 62 }
    ];

    const mockHeartRate = [
      { time: '00:02:00', value: 62 },
      { time: '00:03:00', value: 62 },
      { time: '00:04:00', value: 62 },
      { time: '00:07:00', value: 62 },
      { time: '00:08:00', value: 62 }
    ];

    expect(
      heartRateReducer(undefined, Actions.addHeartRate(mockHeartRate))
    ).toEqual(expected);
  });
});
