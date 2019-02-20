import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from 'screens';
import { MainTabNavigator } from './MainTabNavigator';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';

export const AuthSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Unauthenticated: UnauthenticatedStackNavigator,
  Authenticated: MainTabNavigator,
});
