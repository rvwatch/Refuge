import  React from 'react';
import {shallow} from 'enzyme';
import {Journal} from './Journal';

describe('Journal', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Journal />);
    expect(wrapper).toMatchSnapshot();
  });
});
