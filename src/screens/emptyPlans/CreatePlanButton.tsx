import { FlatButton } from 'components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from 'styles';

export class CreatePlanButton extends React.PureComponent {
  render() {
    return (
      <FlatButton
        title="DODAJ NOWY PLAN"
        icon={{
          name: 'database-plus',
          type: 'material-community',
          color: palette.textWhite,
        }}
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.primaryDark,
    borderRadius: 15,
  },
  title: {
    color: palette.textWhite,
  },
});
