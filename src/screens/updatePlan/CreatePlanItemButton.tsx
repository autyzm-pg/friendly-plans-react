import React, { SFC, useCallback } from 'react';
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

export const CreatePlanItemButton: SFC<Props> = (props: Props) => {
  const { plan } = props;

  const createBreak = useCallback(() => PlanItem.create(plan, PlanItemType.Break), []);
  const createInteraction = useCallback(() => PlanItem.create(plan, PlanItemType.Interaction), []);
  const createSimpleTask = useCallback(() => PlanItem.create(plan, PlanItemType.SimpleTask), []);

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
        onPress={createBreak}
      />
      <FlatButton
        icon={{
          name: 'account-multiple',
          type: 'material-community',
          color: palette.primaryDark,
        }}
        title={i18n.t('updatePlan:addInteraction')}
        containerStyle={styles.buttonContainer}
        onPress={createInteraction}
      />
      <FlatButton
        icon={{
          name: 'layers',
          type: 'material-community',
          color: palette.primaryDark,
        }}
        title={i18n.t('updatePlan:addTask')}
        containerStyle={styles.buttonContainer}
        onPress={createSimpleTask}
      />
    </Card>
  );
};
