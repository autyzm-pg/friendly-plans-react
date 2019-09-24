import { createDrawerNavigator } from 'react-navigation';

import { DrawerContent } from 'components';
import { palette } from 'styles';
import { MainStackNavigator } from './MainStackNavigator';

export const MainDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: MainStackNavigator,
    Logout: 'Logout',
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
