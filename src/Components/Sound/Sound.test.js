import {Sound} from './Sound';

describe('Sound', () => {
  it('should match the snapshot', () => {
    expect(Sound).toMatchSnapshot();
  });
});
