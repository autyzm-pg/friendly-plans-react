import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from 'screens';
import { MainDrawerNavigator } from './MainDrawerNavigator';
import { Route } from './routes';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';

export const AuthSwitchNavigator = createSwitchNavigator({
  [Route.Welcome]: WelcomeScreen,
  [Route.Unauthenticated]: UnauthenticatedStackNavigator,
  [Route.Authenticated]: MainDrawerNavigator,
});
