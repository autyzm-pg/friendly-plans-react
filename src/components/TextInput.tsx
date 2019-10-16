import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput as BaseTextInput, TextInputProps } from 'react-native';

import { palette, typography } from 'styles';

interface Props extends TextInputProps {
  hideUnderline?: boolean;
}

interface State {
  isEditable: boolean;
}

export class TextInput extends React.PureComponent<Props, State> {
  state: State = {
    isEditable: !this.props.value,
  };

  handleFocus = () => this.setState({ isEditable: true });

  handleBlur = () => {
    if (this.props.value) {
      this.setState({ isEditable: false });
    }
  };

  render() {
    const { isEditable } = this.state;
    const { style, hideUnderline, ...inputProps } = this.props;

    return (
      <KeyboardAvoidingView
        style={[
          styles.inputWrapper,
          style,
          !hideUnderline && isEditable && styles.inputUnderline,
          isEditable && styles.inputBackground,
        ]}
      >
        <BaseTextInput
          style={styles.input}
          placeholderTextColor={palette.textInputPlaceholder}
          autoCorrect={false}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...inputProps}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 28,
    ...typography.subtitle,
    paddingVertical: 4,
    color: palette.textBlack,
  },
  inputWrapper: {
    flex: 1,
  },
  inputUnderline: {
    borderBottomColor: palette.primary,
    borderBottomWidth: 1,
  },
  inputBackground: {
    backgroundColor: palette.backgroundAdditional,
  },
});
