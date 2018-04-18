import  React from 'react';
import {shallow} from 'enzyme';
import {Sound} from './Sound';

describe('Sound', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Sound />);
    expect(wrapper).toMatchSnapshot();
  });
});