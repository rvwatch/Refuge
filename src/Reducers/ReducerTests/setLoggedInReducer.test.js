import setLoggedInReducer from '../setLoggedInReducer';
import * as Actions from '../../Actions/';

describe('addUserReducer', () => {
  it('should return a default state', () => {
    const expected = false;
    expect(setLoggedInReducer(undefined, {})).toEqual(expected);
  });

  it('should add setLoggedInReducer data to state', () => {
    const expected = true;
    expect(
      setLoggedInReducer(undefined, Actions.setLoggedIn())
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = false;
    expect(
      setLoggedInReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
