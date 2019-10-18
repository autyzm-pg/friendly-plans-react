import isEmpty from 'lodash.isempty';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { Plan } from 'models';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanItemButton } from './FixedCreatePlanItemButton';
import { PlanForm, PlanFormData } from './PlanForm';
import { TaskTable } from './TaskTable';
import { TaskTableHeader } from './TaskTableHeader';

interface State {
  rowList: number[];
  plan: Plan;
}

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    rowList: [],
    plan: this.props.navigation.getParam('plan'),
  };

  handleAddRow = () => {
    this.setState({ rowList: [...this.state.rowList, this.state.rowList.length] });
  };

  createPlan = async (name: string) => {
    const { id } = this.props.navigation.getParam('student');

    const plan = await Plan.createPlan(id, name);

    this.setState({ plan });
  };

  updatePlan = async (name: string) => {
    await this.state.plan.update({
      name,
    });

    this.setState({ plan: { ...this.state.plan, name } });
  };

  onSubmit = ({ planInput }: PlanFormData) =>
    this.state.plan ? this.updatePlan(planInput) : this.createPlan(planInput);

  navigateToCreatePlanItem = async (itemType: string) => {
    const student = this.props.navigation.getParam('student');
    const plan = this.state.plan;

    this.props.navigation.navigate('PlanItemTask', {
      student,
      plan,
    });
  };

  render() {
    const { plan, rowList } = this.state;

    return (
      <>
        <View style={styles.headerContainer}>
          <PlanForm onSubmit={this.onSubmit} plan={plan} />
          {!isEmpty(rowList) && <TaskTableHeader />}
        </View>
        <TaskTable rowList={rowList} />
        {plan && <FixedCreatePlanItemButton onPress={this.navigateToCreatePlanItem} />}
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    ...getElevation(5),
    backgroundColor: palette.background,
  },
});
