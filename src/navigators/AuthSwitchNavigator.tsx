import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from 'screens';
import { MainDrawerNavigator } from './MainDrawerNavigator';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';

export const AuthSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Unauthenticated: UnauthenticatedStackNavigator,
  Authenticated: MainDrawerNavigator,
});
