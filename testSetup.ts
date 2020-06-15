import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { NativeModules } from 'react-native';

configure({ adapter: new Adapter() });

NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};
