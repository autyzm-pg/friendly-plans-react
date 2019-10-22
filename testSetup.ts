import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-native';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'ios';
  return Platform;
});

jest.mock('models/ModelSubscriber', () => ({
  ModelSubscriber: jest.fn().mockImplementation(() => ({
    subscribeCollectionUpdates: jest.fn(),
    unsubscribeCollectionUpdates: jest.fn(),
  })),
}));

configure({ adapter: new Adapter() });
