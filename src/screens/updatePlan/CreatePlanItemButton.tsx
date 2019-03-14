import React from 'react';
import { StyleSheet } from 'react-native';

import { Card, FlatButton } from 'components';
import { i18n } from 'locale';
import { Plan, PlanItemType } from 'models';
import { palette } from 'styles';

interface Props {
  plan: Plan;
}

export class CreatePlanItemButton extends React.PureComponent<Props> {
  render() {
    const {plan} = this.props;

    return (
      <Card style={styles.container}>
        <FlatButton
          icon={{name: 'bell', type: 'material-community', color: palette.primaryDark}}
          title={i18n.t('updatePlan:addBreak')}
          containerStyle={styles.buttonContainer}
          onPress={() => plan.createPlanItem(PlanItemType.Break)}
        />
        <FlatButton
          icon={{name: 'account-multiple', type: 'material-community', color: palette.primaryDark}}
          title={i18n.t('updatePlan:addInteraction')}
          containerStyle={styles.buttonContainer}
          onPress={() => plan.createPlanItem(PlanItemType.Interaction)}
        />
        <FlatButton
          icon={{name: 'layers', type: 'material-community', color: palette.primaryDark}}
          title={i18n.t('updatePlan:addTask')}
          containerStyle={styles.buttonContainer}
          onPress={() => plan.createPlanItem(PlanItemType.Task)}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});
