import React, { SFC } from 'react';
import { Icon as ElementsIcon, IconProps } from 'react-native-elements';

import { palette } from 'styles';

export const Icon: SFC<IconProps> = ({ color = palette.primary, ...props }) => (
  <ElementsIcon type="material-community" color={color} {...props} />
);

Icon.displayName = 'Icon';
