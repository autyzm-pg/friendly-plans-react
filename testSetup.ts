import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-native';

configure({ adapter: new Adapter() });
