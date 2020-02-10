import React from 'react';
import { StyleSheet } from 'react-native';

import { EllipseBlueBig, LeafBlue, LeafNavyBlue, LeafNavyBlueSmall, LeafOrange } from '../../assets/images/icons';

export class SignUpBackground extends React.PureComponent {
  render() {
    return (
      <>
        <LeafBlue style={styles.firstLeafBlue} />
        <LeafOrange style={styles.leafOrange} />
        <LeafNavyBlueSmall style={styles.leafNavyBlueSmall} />
        <LeafBlue style={styles.leafBlue} />
        <LeafNavyBlue style={styles.leafNavyBlue} />
        <EllipseBlueBig style={styles.ellipseBlueBig} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  firstLeafBlue: {
    position: 'absolute',
    top: '1%',
    right: '0%',
    transform: [{ rotate: '150deg' }],
  },
  leafBlue: {
    position: 'absolute',
    top: '12%',
    right: '5%',
  },
  leafNavyBlue: {
    position: 'absolute',
    top: '14%',
    right: '1%',
    transform: [{ rotate: '20deg' }],
  },
  leafNavyBlueSmall: {
    position: 'absolute',
    top: '8%',
    right: '7%',
  },
  leafOrange: {
    position: 'absolute',
    bottom: '-8%',
    left: '5%',
    transform: [{ rotate: '37deg' }],
  },
  ellipseBlueBig: {
    position: 'absolute',
    bottom: '-5%',
    left: '-5%',
  },
});
