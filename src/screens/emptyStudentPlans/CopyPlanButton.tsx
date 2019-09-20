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
          color: palette.primaryDark,
        }}
        buttonStyle={styles.button}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: dimensions.spacingMedium,
  },
});
