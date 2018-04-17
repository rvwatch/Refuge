import {NewUser} from './NewUser';

describe('NewUser', () => {
  it('should match the snapshot', () => {
    expect(NewUser).toMatchSnapshot();
  });
});
