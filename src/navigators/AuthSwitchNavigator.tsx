import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from 'screens';
import { MainStackNavigator } from './MainStackNavigator';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';

export const AuthSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Unauthenticated: UnauthenticatedStackNavigator,
  Authenticated: MainStackNavigator,
});
