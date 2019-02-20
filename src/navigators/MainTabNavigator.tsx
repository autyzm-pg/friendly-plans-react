import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Icon } from 'components';
import { palette } from 'styles';
import { ContentStackNavigator } from './ContentStackNavigator';
import { SettingsStackNavigator } from './SettingsStackNavigator';

export interface TabBarIconProps {
  tintColor: string;
  focused: boolean;
  horizontal: boolean;
}

export const MainTabNavigator = createBottomTabNavigator(
  {
    Content: {
      screen: ContentStackNavigator,
      navigationOptions: {
        tabBarIcon: /* istanbul ignore next */ ({
          tintColor,
        }: TabBarIconProps) => <Icon name="content-paste" color={tintColor} />,
      },
    },
    Settings: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarIcon: /* istanbul ignore next */ ({
          tintColor,
        }: TabBarIconProps) => (
          <Icon name="settings-outline" color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: palette.primary,
      inactiveTintColor: palette.primaryDisabled,
    },
  },
);
