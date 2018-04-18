import addUserReducer from '../addUserReducer';
import * as Actions from '../../Actions/';
import * as mock from '../../MockData';

describe('addUserReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(addUserReducer(undefined, {})).toEqual(expected);
  });

  it('should add addUserReducer data to state', () => {
    const expected = mock.user;
    const mockUser = mock.user;
    expect(
      addUserReducer(undefined, Actions.addUser(mockUser))
    ).toEqual(expected);
  });

  it('should replace state with an empty object on logout', () => {
    const expected = {};
    expect(
      addUserReducer(undefined, Actions.logoutUser())
    ).toEqual(expected);
  });
});
