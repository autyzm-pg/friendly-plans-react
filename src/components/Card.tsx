import React from 'react';
import { RegisteredStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { dimensions, getElevation, palette } from 'styles';

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
    ...getElevation(2),
    borderRadius: dimensions.spacingSmall,
    backgroundColor: palette.background,
    paddingVertical: dimensions.spacingSmall,
    paddingHorizontal: dimensions.spacingBig,
  },
});
