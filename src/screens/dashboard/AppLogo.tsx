import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'components';
import { palette } from 'styles';

export class AppLogo extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="lightbulb" color={palette.textWhite} size={40} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderTopRightRadius: 12,
    backgroundColor: palette.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
