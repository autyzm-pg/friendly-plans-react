import React from 'react';
import { RegisteredStyle, StyleSheet, View, ViewStyle } from 'react-native';

import { palette } from 'styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
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
    elevation: 1,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    backgroundColor: palette.background,
    padding: 24,
  },
});
