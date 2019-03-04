import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import firebase from 'react-native-firebase';

import { Icon } from 'components';
import { i18n } from 'locale';
import { NavigationService } from 'services';
import { palette } from 'styles';

export class SignOutButton extends React.PureComponent {
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
      <TouchableHighlight
        underlayColor={palette.underlay}
        onPress={this.openSignOutDialog}
      >
        <View style={styles.container}>
          <Icon
            name="logout-variant"
            color={palette.textWhiteMuted}
            size={28}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
