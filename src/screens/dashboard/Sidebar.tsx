import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { palette, statusBarHeight } from 'styles';
import { AppLogo } from './AppLogo';
import { SidebarItem } from './SidebarItem';
import { SignOutButton } from './SignOutButton';

export class Sidebar extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <AppLogo />
        <View style={styles.menuContainer}>
          <SidebarItem
            icon={{ name: 'database-plus' }}
            label={i18n.t('sidebar:addTask')}
          />
          <SidebarItem
            icon={{ name: 'account-plus' }}
            label={i18n.t('sidebar:addStudent')}
          />
          <SidebarItem
            icon={{ name: 'camera' }}
            label={i18n.t('sidebar:takeAPicture')}
          />
          <SidebarItem
            icon={{ name: 'microphone' }}
            label={i18n.t('sidebar:recordSound')}
          />
        </View>
        <SignOutButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    width: 80,
    backgroundColor: palette.primary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'space-between',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
