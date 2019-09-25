import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { palette } from 'styles';
import { Icon, TextInput } from '../../components';

export const PlanInput: SFC = () => (
  <View style={styles.container}>
    <Icon name="emoticon-happy-outline" size={24} color={palette.textInputPlaceholder} />
    <TextInput style={styles.textInput} placeholder={i18n.t('planActivity:planNamePlaceholder')} />
  </View>
);

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
