import {Journal} from './Journal';

describe('Journal', () => {
  it('should match the snapshot', () => {
    expect(Journal).toMatchSnapshot();
  });
});
