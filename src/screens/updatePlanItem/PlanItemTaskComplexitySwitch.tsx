import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import { PlanItemType } from '../../models';

interface Props {
  onComplexitySwitch: (planItemType: PlanItemType) => void;
  planItemType: PlanItemType;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  label: {
    color: palette.textBlack,
    ...typography.headline6,
  },
});

export const PlanItemTaskComplexitySwitch: SFC<Props> = (props: Props) => {
  const { onComplexitySwitch, planItemType } = props;

  const setCompexityToComplex = () => {
    onComplexitySwitch(PlanItemType.SimpleTask);
  };

  const setCompexityToSimple = () => {
    onComplexitySwitch(PlanItemType.ComplexTask);
  };

  const getBackgroundColor = (isActive: boolean) => (isActive ? 'blue' : 'gray');

  return (
    <View>
      <StyledText style={styles.label}>{i18n.t('updatePlanItem:taskComplexity')}</StyledText>
      <View style={styles.container}>
        <Button
          onPress={setCompexityToSimple}
          title={i18n.t('updatePlanItem:simpleTask')}
          backgroundColor={getBackgroundColor(planItemType === PlanItemType.SimpleTask)}
          type="outline"
        />
        <Button
          onPress={setCompexityToComplex}
          title={i18n.t('updatePlanItem:complexTask')}
          backgroundColor={getBackgroundColor(planItemType === PlanItemType.ComplexTask)}
          type="outline"
        />
      </View>
    </View>
  );
};
