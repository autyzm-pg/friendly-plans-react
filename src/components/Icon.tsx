import React from 'react';
import { Icon as ElementsIcon, IconProps } from 'react-native-elements';

import { palette } from 'styles';

export const Icon: React.FunctionComponent<IconProps> = props => (
  <ElementsIcon type="material-community" color={palette.primary} {...props} />
);

Icon.displayName = 'Icon';
