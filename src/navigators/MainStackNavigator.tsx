import React from 'react';
import { Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  NavigationSceneRendererProps,
} from 'react-navigation';

import { AddTaskScreen, DashboardScreen } from '../screens';

export const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    AddTask: AddTaskScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: /* istanbul ignore next */ () => ({
      transitionSpec: {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps: NavigationSceneRendererProps) => {
        const { position, scene } = sceneProps;
        const { index } = scene;

        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });

        return { opacity };
      },
    }),
  },
);
