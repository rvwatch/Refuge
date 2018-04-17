import {Lifeline} from './Lifeline';

describe('Lifeline', () => {
  it('should match the snapshot', () => {
    expect(Lifeline).toMatchSnapshot();
  });
});
