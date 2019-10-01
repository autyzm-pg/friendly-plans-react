import React from 'react';
import { createStackNavigator, HeaderProps } from 'react-navigation';

import { Header } from 'components';

import {
  DashboardScreen,
  PlanActivityScreen,
  PlanItemActivityScreen,
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
    PlanActivity: PlanActivityScreen,
    UpdatePlanItem: UpdatePlanItemScreen,
    UpdatePlanSubItem: UpdatePlanSubItemScreen,
    UpdatePlan: UpdatePlanScreen,
    RunPlanList: RunPlanListScreen,
    RunPlanSlide: RunPlanSlideScreen,
    RunSubPlanList: RunSubPlanListScreen,
    PlanItemActivity: PlanItemActivityScreen,
  },
  {
    headerLayoutPreset: 'left',
    defaultNavigationOptions: ({ navigation }) => {
      const { params } = navigation.state;

      return {
        header: (headerProps: HeaderProps) => <Header {...headerProps} student={params ? params.student : {}} />,
      };
    },
  },
);
