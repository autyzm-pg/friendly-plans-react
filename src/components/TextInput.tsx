import React, { SFC } from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, View } from 'react-native';

import { palette, typography } from 'styles';

interface Props extends TextInputProps {
  hideUnderline?: boolean;
  isActive?: boolean;
}

export const TextInput: SFC<Props> = ({ hideUnderline, isActive = true, style, ...inputProps }) => (
  <View style={[styles.inputWrapper, style, hideUnderline ? {} : styles.inputUnderline]}>
    <BaseTextInput
      autoCorrect={false}
      style={[styles.input, isActive ? styles.inputTouched : styles.inputUnTouched]}
      placeholderTextColor={palette.textInputPlaceholder}
      {...inputProps}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 28,
    ...typography.subtitle,
    paddingVertical: 4,
  },
  inputTouched: {
    backgroundColor: palette.backgroundAdditional,
    color: palette.primaryVariant,
  },
  inputUnTouched: {
    color: palette.textBlack,
    backgroundColor: palette.background,
  },
  inputUnderline: {
    borderBottomColor: palette.primary,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flex: 1,
  },
});
