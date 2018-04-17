import {Breath} from './Breath';

describe('Breath', () => {
  it('should match the snapshot', () => {
    expect(Breath).toMatchSnapshot();
  });
});
