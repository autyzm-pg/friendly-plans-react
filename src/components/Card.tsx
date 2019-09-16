import React from 'react';
import { RegisteredStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { palette } from 'styles';

interface Props {
  children?: React.ReactNode;
  style?: RegisteredStyle<ViewStyle> | ViewStyle | StyleProp<ViewStyle>;
}

export class Card extends React.PureComponent<Props> {
  render() {
    const { children, style } = this.props;
    return <View style={[styles.container, style]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    elevation: 2,
    shadowColor: palette.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 8,
    backgroundColor: palette.background,
    padding: 24,
  },
});
