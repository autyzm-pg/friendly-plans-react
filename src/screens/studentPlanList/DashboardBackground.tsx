import React from 'react';
import { StyleSheet } from 'react-native';

import {
  BackgroundEllipse,
  EllipseBlue,
  EllipseLight,
  EllipsePink,
  EllipsePurple,
  LeafBlue,
  LeafLight,
  LeafNavyBlue,
  LeafNavyBlueSmall,
  LeafOrange,
  LeafPink,
} from '../../assets/images/icons';

export class DashboardBackground extends React.PureComponent {
  render() {
    return (
      <>
        <LeafLight style={styles.leafLight} />
        <EllipseLight style={styles.ellipseLight} />
        <BackgroundEllipse style={styles.bgEllipse} />
        <EllipsePink style={styles.ellipsePink} />
        <LeafOrange style={styles.leafOrange} />
        <LeafNavyBlueSmall style={styles.leafNavyBlueSmall} />
        <LeafBlue style={styles.leafBlue} />
        <LeafPink style={styles.leafPink} />
        <EllipseBlue style={styles.ellipseBlue} />
        <EllipsePurple style={styles.ellipsePurple} />
        <LeafNavyBlue style={styles.leafNavyBlue} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  bgEllipse: {
    position: 'absolute',
    top: '24%',
  },
  ellipseBlue: {
    position: 'absolute',
    top: '30%',
    right: '32%',
  },
  ellipseLight: {
    position: 'absolute',
    top: '23%',
    left: '24%',
  },
  ellipsePink: {
    position: 'absolute',
    bottom: '20%',
    left: '13%',
  },
  ellipsePurple: {
    position: 'absolute',
    bottom: '14%',
    right: '12%',
  },
  leafBlue: {
    position: 'absolute',
    top: '12%',
    left: '8%',
  },
  leafLight: {
    position: 'absolute',
    bottom: '17%',
    left: '5%',
  },
  leafNavyBlue: {
    position: 'absolute',
    top: '25%',
    right: '9%',
  },
  leafNavyBlueSmall: {
    position: 'absolute',
    top: '9%',
    left: '5%',
  },
  leafOrange: {
    position: 'absolute',
    bottom: '-8%',
    left: '17%',
  },
  leafPink: {
    position: 'absolute',
    bottom: '-5%',
    right: '2%',
  },
});
