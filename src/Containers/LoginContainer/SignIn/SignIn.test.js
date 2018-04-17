import {SignIn} from './SignIn';

describe('SignIn', () => {
  it('should match the snapshot', () => {
    expect(SignIn).toMatchSnapshot();
  });
});
