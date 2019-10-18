import React from 'react';
import { createStackNavigator, HeaderProps } from 'react-navigation';

import { Header } from 'components';

import {
  DashboardScreen,
  PlanActivityScreen,
  PlanItemSimpleTaskScreen,
  RunPlanListScreen,
  RunPlanSlideScreen,
  RunSubPlanListScreen,
} from 'screens';

export const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    PlanActivity: PlanActivityScreen,
    RunPlanList: RunPlanListScreen,
    RunPlanSlide: RunPlanSlideScreen,
    RunSubPlanList: RunSubPlanListScreen,
    PlanItemSimpleTask: PlanItemSimpleTaskScreen,
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
