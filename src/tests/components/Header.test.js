import React from 'react';
import reactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h1').length).toBe(1);
});
