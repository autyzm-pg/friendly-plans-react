import { createStackNavigator } from 'react-navigation';

import { StudentSettingsScreen } from 'screens';
import { headerStyle, palette } from '../styles';

export const SettingsStackNavigator = createStackNavigator(
  {
    SettingsList: StudentSettingsScreen,
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
