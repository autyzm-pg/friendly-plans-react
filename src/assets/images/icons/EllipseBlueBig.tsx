import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const EllipseBlueBig = (props: SvgProps) => (
  <Svg width={139} height={139} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#7ed8ff" />
        <Stop offset={1} stopColor="#c6effd" />
      </LinearGradient>
    </Defs>
    <Circle cx={69.5} cy={69.5} r={69.5} fill="url(#prefix__a)" />
  </Svg>
);
