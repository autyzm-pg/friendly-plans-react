import React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

export const EllipseLight = (props: SvgProps) => (
  <Svg width={147} height={147} {...props}>
    <Circle cx={73.5} cy={73.5} r={73.5} fill="#dcdafc" />
  </Svg>
);
