import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
  padded?: boolean;
}

export class FullScreenTemplate extends React.PureComponent<Props> {
  render() {
    const { children, padded } = this.props;
    return (
      <SafeAreaView style={[padded && styles.padded]}>{children}</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
});
