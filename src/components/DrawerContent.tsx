import React from 'react';
import { ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { DrawerItem, DrawerItems, DrawerItemsProps, SafeAreaView } from 'react-navigation';

import { i18n } from 'locale';
import { Route } from 'navigation';

type Props = DrawerItemsProps;

export class DrawerContent extends React.PureComponent<Props> {
  openSignOutDialog = () => {
    this.props.navigation.navigate(Route.Dialog, {
      title: i18n.t('settings:signOutTitle'),
      description: i18n.t('settings:signOutSubtitle'),
      onPress: this.signOut,
      buttonTitle: i18n.t('settings:signOutAction'),
    });
  };

  signOut = async () => {
    this.props.navigation.navigate(Route.Unauthenticated);
    await firebase.auth().signOut();
  };

  onItemPress = ({ route, focused }: DrawerItem) => {
    if (route.routeName !== 'Logout') {
      return this.props.onItemPress({ route, focused });
    }
    this.openSignOutDialog();
  };

  render() {
    return (
      <ScrollView alwaysBounceVertical={false}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...this.props} onItemPress={this.onItemPress} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
