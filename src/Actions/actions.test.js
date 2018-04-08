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
