import React from 'react';
import {shallow} from 'enzyme';
import {LoginContainer} from './LoginContainer';

describe('LoginContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LoginContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
