import {Charts} from './Charts';

describe('Charts', () => {
  it('should match the snapshot', () => {
    expect(Charts).toMatchSnapshot();
  });
});
