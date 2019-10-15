import isEmpty from 'lodash.isempty';
import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from 'components';

interface State {
  isFocus: boolean;
}

export class TextInputForm extends React.PureComponent<TextInputProps, State> {
  state: State = {
    isFocus: false,
  };

  handleFocus = () => this.setState({ isFocus: true });

  handleBlur = () => this.setState({ isFocus: false });

  render() {
    const isActive = !this.state.isFocus && !isEmpty(this.props.value);

    return (
      <TextInput
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        hideUnderline={isActive}
        isActive={!isActive}
        {...this.props}
      />
    );
  }
}
