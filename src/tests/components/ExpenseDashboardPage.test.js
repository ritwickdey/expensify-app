import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';

test('should render Not Found Page correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
