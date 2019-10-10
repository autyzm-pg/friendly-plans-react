import isEmpty from 'lodash.isempty';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate, Icon } from 'components';
import { i18n } from 'locale';
import { Plan } from 'models';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanSubItemButton } from './FixedCreatePlanSubItemButton';
import { PlanForm, PlanFormData } from './PlanForm';
import { TaskTable } from './TaskTable';
import { TaskTableHeader } from './TaskTableHeader';

interface State {
  rowList: number[];
  plan?: Plan;
}

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    rowList: [],
  };

  navigateToCreateSubItem = (itemType: string) => {
    const student = this.props.navigation.getParam('student');
    const plan = this.props.navigation.getParam('plan');
    this.props.navigation.navigate('PlanItemSimpleTask', {
      itemType,
      student,
      plan,
    });
  };

  handleAddRow = () => {
    this.setState({ rowList: [...this.state.rowList, this.state.rowList.length] });
  };

  createPlan = async ({ planInput }: PlanFormData) => {
    const { id } = this.props.navigation.getParam('student');

    const plan = await Plan.createPlan(id, planInput);

    this.setState({ plan });
  };

  render() {
    const { plan, rowList } = this.state;

    return (
      <FullScreenTemplate darkBackground>
        <>
          <View style={styles.headerContainer}>
            <PlanForm onSubmit={this.createPlan} plan={plan} />
            {!isEmpty(rowList) && <TaskTableHeader />}
          </View>
          <TaskTable rowList={rowList} />
          {plan && (
            <FloatingAction
              overrideWithAction
              actions={[
                {
                  name: 'create-plan',
                  icon: <Icon name="add" type="material" color={palette.secondary} size={32} />,
                },
              ]}
              onPressItem={this.handleAddRow}
            />
          )}
          <FixedCreatePlanSubItemButton onPress={this.navigateToCreateSubItem} />
        </>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    ...getElevation(5),
    backgroundColor: palette.background,
  },
});
