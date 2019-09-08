import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Icon } from 'components';

import {
  DashboardScreen,
  RunPlanListScreen,
  RunPlanSlideScreen,
  RunSubPlanListScreen,
  StudentListScreen,
  StudentSettingsScreen,
  UpdatePlanItemScreen,
  UpdatePlanScreen,
  UpdatePlanSubItemScreen
} from 'screens';
import { headerStyle, palette } from 'styles';

export const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    UpdatePlanItem: UpdatePlanItemScreen,
    UpdatePlanSubItem: UpdatePlanSubItemScreen,
    UpdatePlan: UpdatePlanScreen,
    RunPlanList: RunPlanListScreen,
    RunPlanSlide: RunPlanSlideScreen,
    RunSubPlanList: RunSubPlanListScreen,
    StudentSettings: StudentSettingsScreen,
    StudentList: StudentListScreen,
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
