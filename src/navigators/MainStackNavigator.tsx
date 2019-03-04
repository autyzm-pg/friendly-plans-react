import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { AddTaskScreen, DashboardScreen, UpdatePlanScreen } from 'screens';

export const MainStackNavigator = createStackNavigator({
  Dashboard: DashboardScreen,
  AddTask: AddTaskScreen,
  UpdatePlan: UpdatePlanScreen,
});
