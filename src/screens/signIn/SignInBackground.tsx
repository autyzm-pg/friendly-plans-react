import React from 'react';
import { StyleSheet } from 'react-native';

import {
  EllipseBlue,
  EllipsePurple,
  LeafBlue,
  LeafNavyBlue,
  LeafNavyBlueSmall,
  LeafOrange,
  LeafPink,
} from '../../assets/images/icons';

export class SignInBackground extends React.PureComponent {
  render() {
    return (
      <>
        <EllipsePurple style={styles.ellipsePurple} />

        <EllipseBlue style={styles.ellipseBlue} />

        <LeafOrange style={styles.leafOrange} />
        <LeafNavyBlueSmall style={styles.leafNavyBlueSmall} />
        <LeafBlue style={styles.leafBlue} />
        <LeafPink style={styles.leafPink} />
        <LeafNavyBlue style={styles.leafNavyBlue} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  ellipseBlue: {
    position: 'absolute',
    right: '0%',
    top: '60%',
  },
  ellipsePurple: {
    position: 'absolute',
    bottom: '20%',
    right: '0%',
  },
  leafBlue: {
    position: 'absolute',
    top: '55%',
    left: '0%',
  },
  leafNavyBlue: {
    position: 'absolute',
    top: '75%',
    left: '5%',
    transform: [{ rotate: '20deg' }],
  },
  leafNavyBlueSmall: {
    position: 'absolute',
    top: '45%',
    left: '0%',
  },
  leafOrange: {
    position: 'absolute',
    bottom: '-8%',
    left: '-5%',
    transform: [{ rotate: '40deg' }],
  },
  leafPink: {
    position: 'absolute',
    bottom: '-3%',
    right: '-2%',
    transform: [{ scaleX: -1 }],
  },
});
