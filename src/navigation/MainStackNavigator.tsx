import React from 'react';
import { createStackNavigator, HeaderProps } from 'react-navigation';

import { Header } from 'components';

import {
  CreateFirstStudentScreen,
  DashboardScreen,
  ImageLibraryScreen,
  PlanActivityScreen,
  PlanItemTaskScreen,
  RunPlanListScreen,
  RunPlanSlideScreen,
  RunSubPlanListScreen,
} from 'screens';
import { Route } from './routes';

export const MainStackNavigator = createStackNavigator(
  {
    [Route.Dashboard]: DashboardScreen,
    [Route.PlanActivity]: PlanActivityScreen,
    [Route.RunPlanList]: RunPlanListScreen,
    [Route.RunPlanSlide]: RunPlanSlideScreen,
    [Route.RunSubPlanList]: RunSubPlanListScreen,
    [Route.PlanItemTask]: PlanItemTaskScreen,
    [Route.ImageLibrary]: ImageLibraryScreen,
    [Route.CreateFirstStudent]: CreateFirstStudentScreen,
  },
  {
    headerLayoutPreset: 'left',
    defaultNavigationOptions: ({ navigation }) => {
      const { params } = navigation.state;

      return {
        header: (headerProps: HeaderProps) => (
          <Header {...headerProps} student={params && params.student ? params.student : undefined} />
        ),
      };
    },
  },
);
