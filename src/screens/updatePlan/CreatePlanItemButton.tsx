import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Card, FlatButton } from 'components';
import { i18n } from 'locale';
import { Plan, PlanItem, PlanItemType } from 'models';
import { palette } from 'styles';

interface Props {
  plan: Plan;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export class CreatePlanItemButton extends Component<Props> {
  createBreak = () => PlanItem.create(this.props.plan, PlanItemType.Break);
  createInteraction = () => PlanItem.create(this.props.plan, PlanItemType.Interaction);
  createSimpleTask = () => PlanItem.create(this.props.plan, PlanItemType.SimpleTask);

  render() {
    return (
      <Card style={styles.container}>
        <FlatButton
          icon={{
            name: 'bell',
            type: 'material-community',
            color: palette.primaryDark,
          }}
          title={i18n.t('updatePlan:addBreak')}
          containerStyle={styles.buttonContainer}
          onPress={this.createBreak}
        />
        <FlatButton
          icon={{
            name: 'account-multiple',
            type: 'material-community',
            color: palette.primaryDark,
          }}
          title={i18n.t('updatePlan:addInteraction')}
          containerStyle={styles.buttonContainer}
          onPress={this.createInteraction}
        />
        <FlatButton
          icon={{
            name: 'layers',
            type: 'material-community',
            color: palette.primaryDark,
          }}
          title={i18n.t('updatePlan:addTask')}
          containerStyle={styles.buttonContainer}
          onPress={this.createSimpleTask}
        />
      </Card>
    );
  }
}
