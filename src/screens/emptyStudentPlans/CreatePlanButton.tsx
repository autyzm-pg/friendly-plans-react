import { Button } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { StyleSheet } from 'react-native';
import { dimensions, palette } from 'styles';

interface Props {
  onPress: () => void;
}

export class CreatePlanButton extends React.PureComponent<Props> {
  render() {
    return (
      <Button
        title={i18n.t('planList:createPlan')}
        icon={{
          name: 'addfile',
          type: 'antdesign',
          color: palette.textWhite,
          size: 17,
        }}
        buttonStyle={styles.button}
        onPress={this.props.onPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: dimensions.spacingMedium,
  },
});
