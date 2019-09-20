import { FlatButton } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { StyleSheet } from 'react-native';
import { dimensions, palette } from 'styles';

export class CreatePlanButton extends React.PureComponent {
  render() {
    return (
      <FlatButton
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'addfile',
          type: 'antdesign',
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
    borderRadius: dimensions.spacingMedium,
    margin: dimensions.spacingMedium,
  },
  title: {
    color: palette.textWhite,
  },
});
