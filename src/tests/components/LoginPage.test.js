import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should render Login Page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on login button click', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click');

  expect(startLogin).toHaveBeenCalled();
});
