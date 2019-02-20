const createAppContainer = (component: any) => component;
const createStackNavigator = jest.fn();
const createBottomTabNavigator = jest.fn();
const createSwitchNavigator = jest.fn();

const NavigationActions = {
  navigate: jest.fn(),
};

const SafeAreaView = {
  setStatusBarHeight: jest.fn(),
};

export {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  NavigationActions,
  SafeAreaView,
};
