import {Main} from './Main';
import { shallow } from 'enzyme';

describe('Main', () => {
  it('should match the snapshot', () => {
    expect(Main).toMatchSnapshot();
  });




});
