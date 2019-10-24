import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const EllipseBlue = (props: SvgProps) => (
  <Svg width={43} height={43} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#7ed8ff" />
        <Stop offset={1} stopColor="#c6effd" />
      </LinearGradient>
    </Defs>
    <Circle cx={21.5} cy={21.5} r={21.5} fill="url(#prefix__a)" />
  </Svg>
);
