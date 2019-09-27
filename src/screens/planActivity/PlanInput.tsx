import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { Plan } from 'models';
import { palette } from 'styles';
import { Icon, TextInput } from '../../components';

interface Props {
  studentId: string;
}

interface State {
  text: string;
}

export class PlanInput extends React.PureComponent<Props, State> {
  state: State = {
    text: '',
  };

  handleEndEditing = () => Plan.create(this.props.studentId, this.state.text);

  handleChangeText = (text: string) => this.setState({ text });

  render() {
    return (
      <View style={styles.container}>
        <Icon name="emoticon" size={24} color={palette.textInputPlaceholder} />
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t('planActivity:planNamePlaceholder')}
          value={this.state.text}
          onChangeText={this.handleChangeText}
          onEndEditing={this.handleEndEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '40%',
  },
  textInput: {
    marginLeft: 8,
  },
});
