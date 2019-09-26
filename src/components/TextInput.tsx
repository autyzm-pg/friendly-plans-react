import React from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, View } from 'react-native';

import { palette, typography } from 'styles';

type Props = TextInputProps;

export class TextInput extends React.PureComponent<Props> {
  render() {
    const { style, ...inputProps } = this.props;

    return (
      <View style={[styles.inputWrapper, style]}>
        <BaseTextInput style={[styles.input]} placeholderTextColor={palette.textInputPlaceholder} {...inputProps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 28,
    ...typography.subtitle,
    color: palette.primaryVariant,
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: 4,
    borderBottomColor: palette.primary,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flex: 1,
  },
});
