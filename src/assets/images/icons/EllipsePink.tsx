import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const EllipsePink = (props: SvgProps) => (
  <Svg width={78} height={78} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#f8b2d3" />
        <Stop offset={1} stopColor="#fe9dca" />
      </LinearGradient>
    </Defs>
    <Circle cx={39} cy={39} r={39} fill="url(#prefix__a)" />
  </Svg>
);
