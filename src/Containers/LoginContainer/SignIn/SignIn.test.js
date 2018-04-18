import React from 'react';
import {SignIn} from './SignIn';
import {shallow} from 'enzyme';

describe('SignIn', () => {

  let wrapper;
  let mockpostNewUser;
  let preventDefault;
  beforeEach(() => {
    preventDefault = jest.fn();
    mockpostNewUser = jest.fn();
    wrapper = shallow(<SignIn preventDefault={preventDefault} postNewUser={mockpostNewUser} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should add a new user', async () => {
    await wrapper.instance().signInUser();
    expect(mockpostNewUser).toHaveBeenCalled();
  });
});
