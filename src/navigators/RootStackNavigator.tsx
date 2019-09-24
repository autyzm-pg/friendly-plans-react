import { Animated, Easing } from 'react-native';
import { createStackNavigator, NavigationSceneRendererProps } from 'react-navigation';

import { DialogScreen, StudentSettingsScreen, StudentsListScreen } from 'screens';
import { AuthSwitchNavigator } from './AuthSwitchNavigator';

/*
 * This is the outermost navigator. All routes listed here will be accessible
 * from every point in the app. It might be a perfect choice to put your
 * modal and dialog screens.
 * */
export const RootStackNavigator = createStackNavigator(
  {
    Home: AuthSwitchNavigator,
    Dialog: DialogScreen,
    StudentSettings: StudentSettingsScreen,
    StudentsList: StudentsListScreen,
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
