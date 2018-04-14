import fitbitDataReducer from '../fitbitDataReducer';
import * as Actions from '../../Actions/';

describe('fitbitDataReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(fitbitDataReducer(undefined, {})).toEqual(expected);
  });

  it('should add fitbit data to state', () => {
    const expected = {
      user: 'Ricardo V.',
      avgSteps: 4356
    };

    const mockUser = {
      user: 'Ricardo V.',
      avgSteps: 4356
    };

    expect(
      fitbitDataReducer(undefined, Actions.addFitBitData(mockUser))
    ).toEqual(expected);
  });
});
