import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { dimensions, palette } from 'styles';

interface Props {
  extraWide?: boolean;
}

export const Separator: SFC<Props> = ({ extraWide, ...props }) => (
  <View style={[styles.separator, extraWide && styles.extraWide]} />
);

const styles = StyleSheet.create({
  separator: {
    height: 8,
    backgroundColor: palette.backgroundAdditional,
    marginBottom: dimensions.spacingSmall,
  },
  extraWide: {
    marginHorizontal: -24,
  },
});
