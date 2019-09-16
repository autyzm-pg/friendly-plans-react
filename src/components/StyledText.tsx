import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { fonts } from '../styles';

interface Props extends TextProps {
  children: string;
}

export const StyledText: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Text {...props} style={[styles.text, props.style]}>
    {children}
  </Text>
);

StyledText.displayName = 'StyledText';

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.sansSerif.regular,
  },
});
