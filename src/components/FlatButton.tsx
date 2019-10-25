import React, { SFC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button as ElementsButton, ButtonProps } from 'react-native-elements';

import { palette, typography } from 'styles';

interface Props extends ButtonProps {
  handlePress?: () => void;
}

export const FlatButton: SFC<Props> = props => (
  <TouchableOpacity onPress={props.handlePress}>
    <ElementsButton
      {...props}
      loadingProps={{ color: palette.primary }}
      buttonStyle={[styles.button, props.buttonStyle]}
      titleStyle={[styles.title, props.titleStyle]}
      disabledStyle={styles.buttonDisabled}
      disabledTitleStyle={styles.titleDisabled}
    />
  </TouchableOpacity>
);

FlatButton.displayName = 'FlatButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    elevation: 0,
    height: 36,
  },
  title: {
    color: palette.primary,
    textTransform: 'uppercase',
    ...typography.button,
  },
  buttonDisabled: {
    backgroundColor: 'transparent',
  },
  titleDisabled: {
    color: palette.textDisabled,
  },
});
