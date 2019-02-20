import React from 'react';
import firebase from 'react-native-firebase';

import { ListItem } from 'components';
import { i18n } from 'locale';
import { NavigationService } from 'services';

export class SignOutListItem extends React.PureComponent {
  signOut = async () => {
    await firebase.auth().signOut();
    NavigationService.navigate('Unauthenticated');
  };

  openSignOutDialog = () => {
    NavigationService.navigate('Dialog', {
      title: i18n.t('settings:signOutTitle'),
      description: i18n.t('settings:signOutSubtitle'),
      onPress: this.signOut,
      buttonTitle: i18n.t('settings:signOutAction'),
    });
  };

  render() {
    return (
      <ListItem
        icon={{ name: 'logout-variant' }}
        title={i18n.t('settings:signOutTitle')}
        subtitle={i18n.t('settings:signOutSubtitle')}
        onPress={this.openSignOutDialog}
      />
    );
  }
}
