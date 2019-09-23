import { FlatButton } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { StyleSheet } from 'react-native';
import { dimensions, palette } from 'styles';

export class CopyPlanButton extends React.PureComponent {
  render() {
    return (
      <FlatButton
        title={i18n.t('planList:copyPlan')}
        icon={{
          name: 'ios-copy',
          type: 'ionicon',
          color: palette.primary,
          size: 14,
        }}
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
  },
  title: {
    marginLeft: 3,
    textTransform: 'uppercase',
  },
});
