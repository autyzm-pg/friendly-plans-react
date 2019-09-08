import React from 'react';
import { StyleSheet, View } from 'react-native';

import { palette } from 'styles';

interface Props {
  extraWide?: boolean;
}

export class Separator extends React.PureComponent<Props> {
  render() {
    const { extraWide } = this.props;
    return <View style={[styles.separator, extraWide && styles.extraWide]} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 8,
    backgroundColor: palette.backgroundDark,
  },
  extraWide: {
    marginHorizontal: -24,
  },
});
