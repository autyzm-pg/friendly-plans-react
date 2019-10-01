import React, { SFC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconProps } from 'react-native-elements';

import { palette, typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Props extends IconProps {
  label?: string;
}

export const IconButton: SFC<Props> = ({ onPress, containerStyle, label, disabled, ...props }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, containerStyle]}>
      <Icon {...props} disabledStyle={styles.iconDisabled} />
      {!!label && <StyledText style={styles.label}>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    ...typography.body,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDisabled: {
    backgroundColor: 'transparent',
  },
});

IconButton.displayName = 'IconButton';
