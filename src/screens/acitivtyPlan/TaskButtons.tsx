import React from 'react';
import { StyleSheet, View } from 'react-native';

import { palette } from 'styles';
import { FlatButton, IconButton } from '../../components';

export class TaskButtons extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlatButton
          title="TASUJ ZADANIA"
          icon={{
            name: 'shuffle',
            type: 'material-community-icons',
            color: palette.textBlackMuted,
            size: 22,
          }}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
        />
        <IconButton name="play" type="antdesign" size={36} color={palette.textBlackMuted} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonStyle: {
    marginRight: 20,
  },
  buttonTitle: {
    color: palette.textBlackMuted,
  },
});
