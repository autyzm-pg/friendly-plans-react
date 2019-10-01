import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';

import { i18n } from 'locale';
import { FlatButton } from '../../components';
import { dimensions, palette } from '../../styles';

interface Props {
  disabled?: boolean;
}

export const ShuffleButton: SFC<Props> = ({ disabled }) => (
  <FlatButton
    title={i18n.t('planActivity:shuffleTasks')}
    icon={{
      name: 'shuffle',
      type: 'material-community-icons',
      color: disabled ? palette.textDisabled : palette.primary,
      size: 22,
      disabled,
      disabledStyle: styles.iconDisabled,
    }}
    disabled={disabled}
    buttonStyle={styles.button}
  />
);

const styles = StyleSheet.create({
  button: {
    marginRight: dimensions.spacingBig,
  },
  iconDisabled: {
    backgroundColor: 'transparent',
  },
});
