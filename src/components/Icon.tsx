import React, { SFC } from 'react';
import { Icon as ElementsIcon, IconProps } from 'react-native-elements';

import { palette } from 'styles';

export const Icon: SFC<IconProps> = ({ color = palette.primary, type = 'material-community', ...props }) => (
  <ElementsIcon type={type} color={color} {...props} />
);

Icon.displayName = 'Icon';
