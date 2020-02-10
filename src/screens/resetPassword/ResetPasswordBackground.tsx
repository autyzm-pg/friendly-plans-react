import React from 'react';
import { StyleSheet } from 'react-native';

import { LeafBlue, LeafNavyBlue, LeafNavyBlueSmall, LeafPink } from '../../assets/images/icons';

export class ResetPasswordBackground extends React.PureComponent {
  render() {
    return (
      <>
        <LeafNavyBlueSmall style={styles.leafNavyBlueSmall} />
        <LeafBlue style={styles.leafBlue} />
        <LeafPink style={styles.leafPink} />
        <LeafNavyBlue style={styles.leafNavyBlue} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  leafBlue: {
    position: 'absolute',
    top: '40%',
    left: '5%',
  },
  leafNavyBlue: {
    position: 'absolute',
    top: '20%',
    right: '5%',
    transform: [{ rotate: '20deg' }],
  },
  leafNavyBlueSmall: {
    position: 'absolute',
    top: '30%',
    left: '5%',
  },
  leafPink: {
    position: 'absolute',
    top: '10%',
    right: '-2%',
    transform: [{ scaleX: -1 }],
  },
});
