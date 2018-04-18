import  React from 'react';
import {shallow} from 'enzyme';
import {Mindfulness} from './Mindfulness';

describe('Mindfulness', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Mindfulness />);
    expect(wrapper).toMatchSnapshot();
  });
});