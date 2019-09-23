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
          size: 13,
        }}
        buttonStyle={styles.button}
        onPress={this.props.onPress}
        titleStyle={styles.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: dimensions.spacingSmall,
    paddingRight: 15,
    margin: 22,
  },
  title: {
    marginLeft: 3,
    textTransform: 'uppercase',
  },
});
