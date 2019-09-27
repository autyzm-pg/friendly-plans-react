import React, { SFC } from 'react';
import { FloatingAction } from 'react-native-floating-action';

import { Icon } from 'components';
import { palette } from 'styles';

interface Props {
  onPress: () => void;
}

export const FixedCreatePlanButton: SFC<Props> = ({ onPress }) => (
  <FloatingAction
    overrideWithAction
    actions={[
      {
        name: 'create-plan',
        icon: <Icon name="add" type="material" color={palette.secondary} size={32} />,
      },
    ]}
    onPressItem={onPress}
  />
);
