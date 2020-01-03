import { Animated, Easing } from 'react-native';
import { createStackNavigator, NavigationSceneRendererProps } from 'react-navigation';

import {
  DialogScreen,
  StudentCreateScreen,
  StudentSettingsScreen,
  StudentsListScreen,
  StudentsListSearchScreen,
} from 'screens';
import { AuthSwitchNavigator } from './AuthSwitchNavigator';
import { Route } from './routes';

/*
 * This is the outermost navigator. All routes listed here will be accessible
 * from every point in the app. It might be a perfect choice to put your
 * modal and dialog screens.
 * */
export const RootStackNavigator = createStackNavigator(
  {
    [Route.Root]: AuthSwitchNavigator,
    [Route.Dialog]: DialogScreen,
    [Route.StudentSettings]: StudentSettingsScreen,
    [Route.StudentCreate]: StudentCreateScreen,
    [Route.StudentsList]: StudentsListScreen,
    [Route.StudentsListSearch]: StudentsListSearchScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    defaultNavigationOptions: {
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
