import {LoginContainer} from './LoginContainer';

describe('LoginContainer', () => {
  it('should match the snapshot', () => {
    expect(LoginContainer).toMatchSnapshot();
  });
});
