import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export class DashboardBackground extends React.PureComponent {
  render() {
    const bgEllipse = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="721.935" height="721.935" viewBox="0 0 721.935 721.935">
        <defs>
            <linearGradient id="a" x1="0.293" y1="0.007" x2="1.013" y2="0.644" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#e6e8ff"/>
                <stop offset="1" stop-color="#f0f0fd"/>
            </linearGradient>
        </defs>
        <circle cx="349" cy="349" r="349" transform="matrix(0.999, -0.035, 0.035, 0.999, 0, 24.36)" style="fill:url(#a)"/>
      </svg>
  `;
    return <SvgXml xml={bgEllipse} style={styles.bgEllipse} />;
  }
}

const styles = StyleSheet.create({
  bgEllipse: {
    position: 'absolute',
    top: '30%',
  },
});
