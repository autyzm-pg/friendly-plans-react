import React from 'react';
import firebase from 'react-native-firebase';
import SplashScreen from 'react-native-splash-screen';

import { FullScreenTemplate } from 'components';
import { Route } from 'navigation';
import { NavigationInjectedProps } from 'react-navigation';

export class WelcomeScreen extends React.PureComponent<NavigationInjectedProps> {
  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      this.props.navigation.navigate(Route.Authenticated);
    } else {
      this.props.navigation.navigate(Route.Unauthenticated);
    }
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  render() {
    return <FullScreenTemplate />;
  }
}
