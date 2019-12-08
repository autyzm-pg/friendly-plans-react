import React from 'react';
import { Alert } from 'react-native';
import firebase from 'react-native-firebase';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { Route } from 'navigation';
import { NavigationService } from 'services';

interface State {
  loading: boolean;
}

export class SignInAsAnonymousButton extends React.PureComponent<{}, State> {
  state = {
    loading: false,
  };

  render() {
    return (
      <FlatButton
        title={i18n.t('signIn:signInAsAnonymous')}
        onPress={this.signInAnonymously}
        loading={this.state.loading}
      />
    );
  }

  signInAnonymously = async () => {
    this.setState({ loading: true });
    try {
      await firebase.auth().signInAnonymously();
      NavigationService.navigate(Route.Authenticated);
    } catch (error) {
      Alert.alert(i18n.t('common:error'), error.message);
    }
  };
}
