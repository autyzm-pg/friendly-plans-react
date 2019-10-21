import React, { SFC } from 'react';

import { StyledText } from 'components';
import { StyleSheet, View } from 'react-native';
import { palette, typography } from 'styles';

interface Props {
  children: JSX.Element;
  title: string;
}

export const ImageAction: SFC<Props> = ({ children, title }) => (
  <View style={styles.imageAction}>
    <View style={styles.imageActionIcon}>{children}</View>
    <StyledText style={styles.imageActionTitle}>{title}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  imageAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageActionIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderColor: palette.backgroundSurface,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageActionTitle: {
    ...typography.overline,
    width: 64,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 8,
  },
});
