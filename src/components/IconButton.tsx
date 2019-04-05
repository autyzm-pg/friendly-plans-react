import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconProps } from 'react-native-elements';

import { typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Props extends IconProps {
  label?: string;
}

export const IconButton: React.FunctionComponent<Props> = ({
  onPress,
  containerStyle,
  label,
  ...props
}) => (
  <TouchableOpacity onPress={onPress} style={containerStyle}>
    <Icon {...props} />
    {!!label && <StyledText style={styles.label}>{label}</StyledText>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    ...typography.body1,
    textAlign: 'center',
  },
});

IconButton.displayName = 'IconButton';
