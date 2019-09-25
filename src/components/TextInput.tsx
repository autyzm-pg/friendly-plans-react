import React from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps } from 'react-native';

import { palette, typography } from 'styles';

type Props = TextInputProps;

export class TextInput extends React.PureComponent<Props> {
  render() {
    return <BaseTextInput style={[styles.input, this.props.style]} placeholderTextColor="#C8CBFA" {...this.props} />;
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 28,
    ...typography.subtitle1,
    color: palette.primaryDark,
    backgroundColor: '#F5F5FF',
    marginLeft: 8,
    paddingTop: 5,
    paddingBottom: 4,
    borderBottomColor: palette.primary,
    borderBottomWidth: 1,
  },
});
