import stepsTakenReducer from '../stepsTakenReducer';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData/';

describe('stepsTakenReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(stepsTakenReducer(undefined, [])).toEqual(expected);
  });

  it('should add steps to state', () => {
    const mockStepsTaken = mock.mockStepsTaken;
    const expected = mock.mockStepsTaken;

    expect(
      stepsTakenReducer(undefined, Actions.addStepsTaken(mockStepsTaken))
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = [];
    expect(
      stepsTakenReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
