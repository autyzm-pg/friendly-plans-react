import { createStackNavigator } from 'react-navigation';

import { ContentListScreen } from 'screens';
import { headerStyle, palette } from '../styles';

export const ContentStackNavigator = createStackNavigator(
  {
    ContentList: ContentListScreen,
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
