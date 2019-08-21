import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import {PlanItemType} from '../../models';

interface Props {
  onComplexitySwitch: (planItemType: PlanItemType) => void;
  planItemType: PlanItemType;
}

export class PlanItemTaskComplexitySwitch extends React.PureComponent<Props> {

  render() {
    return (
      <View>
        <StyledText style={styles.label}>
          {i18n.t('updatePlanItem:taskComplexity')}
        </StyledText>
        <View style={styles.container}>
          <Button
            onPress={() => this.props.onComplexitySwitch(PlanItemType.SimpleTask)}
            title={i18n.t('updatePlanItem:simpleTask')}
            backgroundColor={this.props.planItemType === PlanItemType.SimpleTask ? 'blue' : 'gray'}
            type="outline"
          />
          <Button
            onPress={() => this.props.onComplexitySwitch(PlanItemType.ComplexTask)}
            title={i18n.t('updatePlanItem:complexTask')}
            backgroundColor={this.props.planItemType === PlanItemType.ComplexTask ? 'blue' : 'gray'}
            type="outline"
          />
        </View>
      </View>
    );
  }
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
  }
});
