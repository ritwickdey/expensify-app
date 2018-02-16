import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

let wrapper, startLogout;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h1').length).toBe(1);
});

test('should call startLogout on button click', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click');

  expect(startLogout).toHaveBeenCalled();
});
