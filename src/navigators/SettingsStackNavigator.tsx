import { createStackNavigator } from 'react-navigation';

import { SettingsScreen } from 'screens';
import { headerStyle, palette } from '../styles';

export const SettingsStackNavigator = createStackNavigator(
  {
    SettingsList: SettingsScreen,
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: palette.primary,
      headerTitleStyle: headerStyle.headerText,
    },
  },
);
