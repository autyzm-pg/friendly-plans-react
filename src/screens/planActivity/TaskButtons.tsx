import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { palette } from 'styles';
import { FlatButton, IconButton } from '../../components';

export class TaskButtons extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlatButton
          title={i18n.t('planActivity:shuffleTasks')}
          icon={{
            name: 'shuffle',
            type: 'material-community-icons',
            color: palette.textDisabled,
            size: 22,
          }}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
        />
        <IconButton name="play-circle" size={36} color={palette.textDisabled} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    marginRight: 20,
  },
  buttonTitle: {
    color: palette.textDisabled,
    textTransform: 'uppercase',
  },
});
