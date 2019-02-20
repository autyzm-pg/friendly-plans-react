import { createStackNavigator } from 'react-navigation';

import { SettingsScreen } from 'screens/settings/SettingsScreen';
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
