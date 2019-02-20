import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconProps } from 'react-native-elements';

import { Icon } from './Icon';

export const IconButton: React.FunctionComponent<IconProps> = ({
  onPress,
  containerStyle,
  ...props
}) => (
  <TouchableOpacity onPress={onPress} style={containerStyle}>
    <Icon {...props} />
  </TouchableOpacity>
);

IconButton.displayName = 'IconButton';
