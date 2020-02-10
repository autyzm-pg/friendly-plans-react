import React from 'react';
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, View } from 'react-native';

import { palette, typography } from 'styles';
import { IconButton } from './IconButton';
import { StyledText } from './StyledText';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  styleContainer?: object;
}

interface State {
  isSecureTextVisible: boolean;
}

export class InputItem extends React.PureComponent<Props, State> {
  state = {
    isSecureTextVisible: false,
  };

  toggleSecureTextVisibility = () => {
    this.setState({ isSecureTextVisible: !this.state.isSecureTextVisible });
  };

  renderSecureTextSwitch = () => {
    const { secureTextEntry } = this.props;
    const { isSecureTextVisible } = this.state;
    if (!secureTextEntry) {
      return;
    }
    return (
      <IconButton
        name={isSecureTextVisible ? 'eye-off-outline' : 'eye-outline'}
        onPress={this.toggleSecureTextVisibility}
        containerStyle={styles.secureTextIconContainer}
      />
    );
  };

  render() {
    const { label, error, touched, style, secureTextEntry, styleContainer } = this.props;
    return (
      <View>
        {!!label && <StyledText style={styles.label}>{label}</StyledText>}
        <View style={[styles.inputContainer, styleContainer]}>
          <BaseTextInput
            {...this.props}
            style={[styles.input, style]}
            secureTextEntry={secureTextEntry && !this.state.isSecureTextVisible}
          />
          {this.renderSecureTextSwitch()}
        </View>
        {!!error && (
          <View style={styles.errorContainer}>{touched && <StyledText style={styles.error}>{error}</StyledText>}</View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    ...typography.caption,
    color: palette.textDisabled,
    marginBottom: 4,
  },
  inputContainer: {
    height: 44,
    borderRadius: 4,
    borderColor: palette.border,
    borderWidth: 1,
  },
  input: {
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 16,
    ...typography.subtitle,
    color: palette.textBlack,
  },
  errorContainer: {
    height: 26,
    justifyContent: 'center',
  },
  error: {
    ...typography.caption,
    color: palette.error,
  },
  secureTextIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 42,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
