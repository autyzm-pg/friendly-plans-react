import { FlatButton } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from 'styles';

export class CopyPlanButton extends React.PureComponent {
  render() {
    return (
      <FlatButton
        title="SKOPIUJ ISTNIEJACY PLAN"
        icon={{
          name: 'ios-copy',
          type: 'ionicon',
          color: palette.primaryDark,
        }}
        buttonStyle={styles.button}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    margin: 16,
  },
});
