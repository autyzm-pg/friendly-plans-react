import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { palette } from 'styles';
import { Icon, TextInput } from '../../components';

export class PlanInput extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="emoticon-happy-outline" size={24} color={palette.textInput} />
        <TextInput style={styles.textInput} placeholder={i18n.t('planActivity:planNamePlaceholder')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '40%',
  },
  textInput: {
    marginLeft: 8,
  },
});
