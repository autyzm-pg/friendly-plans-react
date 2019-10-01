import React, { SFC } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';

import { i18n } from 'locale';
import { TextInput } from '../../components';

export const PlanNameInput: SFC<TextInputProps> = props => (
  <TextInput style={styles.textInput} placeholder={i18n.t('planActivity:planNamePlaceholder')} {...props} />
);

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 8,
  },
});
