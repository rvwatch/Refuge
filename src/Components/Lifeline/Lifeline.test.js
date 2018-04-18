import  React from 'react';
import {shallow} from 'enzyme';
import {Lifeline} from './Lifeline';

describe('Lifeline', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Lifeline />);
    expect(wrapper).toMatchSnapshot();
  });
});