import React from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps } from 'react-native';

import { palette, typography } from 'styles';

type Props = TextInputProps;

export class TextInput extends React.PureComponent<Props> {
  render() {
    return (
      <BaseTextInput
        style={[styles.input, this.props.style]}
        placeholderTextColor={palette.textBlackMuted}
        underlineColorAndroid={palette.primaryDark}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    ...typography.subtitle1,
    color: palette.textBlack,
    flex: 1,
    borderBottomColor: 'black',
  },
});
