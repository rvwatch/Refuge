import addRestingHeartReducer from '../addRestingHeartReducer';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData';

describe('addRestingHeartReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(addRestingHeartReducer(undefined, {})).toEqual(expected);
  });

  it('should add addRestingHeartReducer data to state', () => {
    const expected = mock.restingHeartRate;
    const mockRestingHeartRate = mock.restingHeartRate;
    expect(
      addRestingHeartReducer(undefined, Actions.addRestingHeart(mockRestingHeartRate))
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = {};
    expect(
      addRestingHeartReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
