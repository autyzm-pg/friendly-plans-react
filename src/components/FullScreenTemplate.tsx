import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
  padded?: boolean;
  narrow?: boolean;
}

export class FullScreenTemplate extends React.PureComponent<Props> {
  render() {
    const { children, padded, narrow } = this.props;
    return (
      <SafeAreaView
        style={[padded && styles.padded, narrow && styles.narrowContainer]}
      >
        <View style={[narrow && styles.narrow]}>{children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  narrowContainer: {
    alignItems: 'center',
  },
  narrow: {
    width: 400,
  },
});
