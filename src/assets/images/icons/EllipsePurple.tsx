import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const EllipsePurple = (props: SvgProps) => (
  <Svg width={105} height={105} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#c8cbfa" />
        <Stop offset={1} stopColor="#8690ff" />
      </LinearGradient>
    </Defs>
    <Circle cx={52.5} cy={52.5} r={52.5} fill="url(#prefix__a)" />
  </Svg>
);
