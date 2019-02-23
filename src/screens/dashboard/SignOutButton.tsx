import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'components';
import { palette } from 'styles';

export class SignOutButton extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="logout-variant" color={palette.textWhiteMuted} size={28} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
