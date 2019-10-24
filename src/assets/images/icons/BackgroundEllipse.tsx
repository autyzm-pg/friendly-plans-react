import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const BackgroundEllipse = (props: SvgProps) => (
  <Svg width={721.935} height={721.935} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.293} y1={0.007} x2={1.013} y2={0.644} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#e6e8ff" />
        <Stop offset={1} stopColor="#f0f0fd" />
      </LinearGradient>
    </Defs>
    <Circle cx={349} cy={349} r={349} transform="rotate(-2 695.787 12.185)" fill="url(#prefix__a)" />
  </Svg>
);
