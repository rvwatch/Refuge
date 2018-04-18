import  React from 'react';
import {shallow} from 'enzyme';
import {Videos} from './Videos';

describe('Videos', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Videos />);
    expect(wrapper).toMatchSnapshot();
  });
});