import React, { SFC } from 'react';

import { IconButton } from 'components';
import { palette } from 'styles';

interface Props {
  firstIconName: string;
  secondIconName: string;
}

export const SwitchIconButton: SFC<Props> = ({ firstIconName, secondIconName }) => (
  <>
    <IconButton name={firstIconName} type="material" size={24} color={palette.primaryVariant} />
    <IconButton name={secondIconName} type="material" size={24} color={palette.primaryVariant} />
  </>
);
