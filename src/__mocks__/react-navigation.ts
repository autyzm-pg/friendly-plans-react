const createAppContainer = (component: any) => component;
const createStackNavigator = jest.fn();
const createDrawerNavigator = jest.fn();
const createBottomTabNavigator = jest.fn();
const createSwitchNavigator = jest.fn();
const withNavigation = jest.fn();
const withNavigationFocus = jest.fn(component => component);

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
  createDrawerNavigator,
  NavigationActions,
  SafeAreaView,
  withNavigation,
  withNavigationFocus,
};
