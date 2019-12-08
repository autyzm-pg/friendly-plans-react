import { createDrawerNavigator } from 'react-navigation';

import { DrawerContent } from 'components';
import { palette } from 'styles';
import { MainStackNavigator } from './MainStackNavigator';
import { Route } from './routes';

export const MainDrawerNavigator = createDrawerNavigator(
  {
    [Route.Home]: MainStackNavigator,
    [Route.Logout]: 'Logout',
  },
  {
    contentOptions: {
      activeTintColor: palette.primaryVariant,
      inactiveTintColor: palette.primary,
    },
    edgeWidth: -100, // to disable opening gesture
    contentComponent: DrawerContent,
  },
);
