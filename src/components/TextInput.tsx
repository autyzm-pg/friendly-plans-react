import React, { SFC } from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, View } from 'react-native';

import { palette, typography } from 'styles';

interface Props extends TextInputProps {
  hideUnderline?: boolean;
}

export const TextInput: SFC<Props> = ({ hideUnderline, style, ...inputProps }) => (
  <View style={[styles.inputWrapper, style, hideUnderline ? {} : styles.inputUnderline]}>
    <BaseTextInput style={[styles.input]} placeholderTextColor={palette.textInputPlaceholder} {...inputProps} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 28,
    ...typography.subtitle,
    color: palette.primaryVariant,
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
  },
  inputUnderline: {
    borderBottomColor: palette.primary,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flex: 1,
  },
});
