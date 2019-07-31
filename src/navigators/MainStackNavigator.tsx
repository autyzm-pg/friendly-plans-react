import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Icon } from 'components';

import {
  DashboardScreen,
  StudentSettingsScreen,
  RunPlanScreen,
  UpdatePlanItemScreen,
  UpdatePlanScreen,
} from 'screens';
import { headerStyle, palette } from 'styles';

export const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    UpdatePlanItem: UpdatePlanItemScreen,
    UpdatePlan: UpdatePlanScreen,
    RunPlan: RunPlanScreen,
    StudentSettings: StudentSettingsScreen,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: palette.primary,
      headerTitleStyle: headerStyle.headerText,
      headerStyle: headerStyle.header,
      headerBackImage: <Icon name="arrow-left" color={palette.textWhite} />,
    },
  },
);
