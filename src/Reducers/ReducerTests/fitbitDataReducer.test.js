import fitbitDataReducer from '../fitbitDataReducer';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('fitbitDataReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(fitbitDataReducer(undefined, {})).toEqual(expected);
  });

  it('should add fitbit data to state', () => {
    const expected = mock.mockFitbitProfile;
    const mockUser = mock.mockFitbitProfile;

    expect(
      fitbitDataReducer(undefined, Actions.addFitBitData(mockUser))
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = {};
    expect(
      fitbitDataReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
