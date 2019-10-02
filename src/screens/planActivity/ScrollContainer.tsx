import React, { SFC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { palette } from 'styles';

interface Props {
  children: JSX.Element;
}

export const ScrollContainer: SFC<Props> = ({ children }) => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
      {children}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.backgroundSurface,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});
