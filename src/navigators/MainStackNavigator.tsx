import React from 'react';
import { createStackNavigator, HeaderProps } from 'react-navigation';

import { Header } from 'components';

import {
  DashboardScreen,
  RunPlanListScreen,
  RunPlanSlideScreen,
  RunSubPlanListScreen,
  UpdatePlanItemScreen,
  UpdatePlanScreen,
  UpdatePlanSubItemScreen,
} from 'screens';

export const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    UpdatePlanItem: UpdatePlanItemScreen,
    UpdatePlanSubItem: UpdatePlanSubItemScreen,
    UpdatePlan: UpdatePlanScreen,
    RunPlanList: RunPlanListScreen,
    RunPlanSlide: RunPlanSlideScreen,
    RunSubPlanList: RunSubPlanListScreen,
  },
  {
    headerLayoutPreset: 'left',
    defaultNavigationOptions: () => ({
      header: (headerProps: HeaderProps) => <Header {...headerProps} />,
    }),
  },
);
