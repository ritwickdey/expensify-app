import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-dates/initialize';

configure({
  adapter: new Adapter()
});

require('dotenv').config({
  path: `.env.test`
});
