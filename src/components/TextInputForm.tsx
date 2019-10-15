import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput } from 'components';
import isEmpty from 'lodash.isempty';
import { dimensions } from 'styles';

interface State {
  isTouched: boolean;
}

export class TextInputForm extends React.PureComponent<any, State> {
  state: State = {
    isTouched: false,
  };

  handleChange = (value: string) => this.props.onChange(this.props.name, value);

  handleFocus = () => this.setState({ isTouched: true });

  handleBlur = () => this.setState({ isTouched: false });

  render() {
    const { value } = this.props;

    return (
      <TextInput
        style={styles.inputContainer}
        onChangeText={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        hideUnderline={!this.state.isTouched && !isEmpty(value)}
        isTouched={this.state.isTouched || isEmpty(value)}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: dimensions.spacingMedium,
  },
});
