import React from 'react';
import firebase from 'react-native-firebase';
import SplashScreen from 'react-native-splash-screen';

import { FullScreenTemplate } from 'components';
import { NavigationInjectedProps } from 'react-navigation';

export class WelcomeScreen extends React.PureComponent<NavigationInjectedProps> {
  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      this.props.navigation.navigate('Authenticated');
    } else {
      this.props.navigation.navigate('Unauthenticated');
    }
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  render() {
    return <FullScreenTemplate />;
  }
}
