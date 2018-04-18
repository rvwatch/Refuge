import  React from 'react';
import {Breath} from './Breath';
import {shallow} from 'enzyme';

describe('Breath', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Breath />);
    expect(wrapper).toMatchSnapshot();
  });
});
