import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { palette } from 'styles';
import { Icon, TextInput } from '../../components';

interface Props {
  onEndEditing: (text: string) => void;
}

interface State {
  text: string;
}

export class PlanInput extends React.PureComponent<Props, State> {
  state: State = {
    text: '',
  };

  handleEndEditing = () => this.props.onEndEditing(this.state.text);

  handleChangeText = (text: string) => this.setState({ text });

  render() {
    return (
      <>
        <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t('planActivity:planNamePlaceholder')}
          value={this.state.text}
          onChangeText={this.handleChangeText}
          onEndEditing={this.handleEndEditing}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 8,
  },
});
