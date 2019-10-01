import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';

import { i18n } from 'locale';
import { FlatButton } from '../../components';
import { palette } from '../../styles';

interface Props {
  disabled?: boolean;
}

export const ShuffleButton: SFC<Props> = ({ disabled }) => (
  <FlatButton
    title={i18n.t('planActivity:shuffleTasks')}
    icon={{
      name: 'shuffle',
      type: 'material-community-icons',
      color: disabled ? palette.primary : palette.textDisabled,
      size: 22,
      disabled: !disabled,
      disabledStyle: styles.buttonDisabled,
    }}
    disabled={!disabled}
    buttonStyle={styles.button}
  />
);

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
  buttonDisabled: {
    backgroundColor: 'transparent',
  },
});
