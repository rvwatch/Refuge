import heartRateReducer from '../heartRateReducer';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('heartRateReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(heartRateReducer(undefined, [])).toEqual(expected);
  });

  it('should add heartRate data to state', () => {
    const expected = mock.mockHeartRate;
    const mockHeartRate = mock.mockHeartRate;

    expect(
      heartRateReducer(undefined, Actions.addHeartRate(mockHeartRate))
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = [];
    expect(
      heartRateReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
