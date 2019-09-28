import React from 'react';
import { StyleSheet, View } from 'react-native';

import { i18n } from 'locale';
import { Plan } from 'models';
import { palette } from 'styles';
import { FlatButton } from '../../components';

interface Props {
  plan: Plan;
  disabled?: boolean;
}

export class TaskButtons extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatButton
          title={i18n.t('planActivity:shuffleTasks')}
          icon={{
            name: 'shuffle',
            type: 'material-community-icons',
            color: this.props.disabled ? palette.textDisabled : palette.primary,
            size: 22,
            disabled: this.props.disabled,
            disabledStyle: styles.iconDisabled,
          }}
          disabled={this.props.disabled}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDisabled: {
    backgroundColor: 'transparent',
  },
  buttonStyle: {
    marginRight: 20,
  },
});

/*
        <PlayButton disabled={this.props.disabled} plan={this.props.plan} size={50} />

*/
