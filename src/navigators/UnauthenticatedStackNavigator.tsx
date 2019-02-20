import { createStackNavigator } from 'react-navigation';

import { i18n } from 'locale';
import { ResetPasswordScreen, SignInScreen, SignUpScreen } from 'screens';
import { headerStyle, palette } from 'styles';

export const UnauthenticatedStackNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        title: i18n.t('signIn:signIn'),
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        title: i18n.t('signUp:signUp'),
      },
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: {
        title: i18n.t('resetPassword:resetPassword'),
      },
    },
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: palette.primary,
      headerTitleStyle: headerStyle.headerText,
    },
  },
);
