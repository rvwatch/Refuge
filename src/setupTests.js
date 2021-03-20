import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
//require('jest-localstorage-mock');

configure({ adapter: new Adapter() });
