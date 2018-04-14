import stepsTakenReducer from '../stepsTakenReducer';
import * as Actions from '../../Actions/';

describe('stepsTakenReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(stepsTakenReducer(undefined, [])).toEqual(expected);
  });

  it('should add steps to state', () => {
    const mockStepsTaken = [
      { time: '14:02:00', value: 51 },
      { time: '14:03:00', value: 67 },
      { time: '14:04:00', value: 29 },
      { time: '14:05:00', value: 68 },
      { time: '14:06:00', value: 76 }
    ];
    const expected = [
      { time: '14:02:00', value: 51 },
      { time: '14:03:00', value: 67 },
      { time: '14:04:00', value: 29 },
      { time: '14:05:00', value: 68 },
      { time: '14:06:00', value: 76 }
    ];

    expect(
      stepsTakenReducer(undefined, Actions.addStepsTaken(mockStepsTaken))
    ).toEqual(expected);
  });
});
