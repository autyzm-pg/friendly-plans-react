import { isEmpty } from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Plan, PlanItem } from 'models';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanItemButton } from './FixedCreatePlanItemButton';
import { PlanForm, PlanFormData, PlanFormError } from './PlanForm';
import { TaskTable } from './TaskTable';
import { TaskTableHeader } from './TaskTableHeader';

interface State {
  plan: Plan;
  planItemList: PlanItem[];
}

export class PlanActivityScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    planItemList: [],
    plan: this.props.navigation.getParam('plan'),
  };

  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();

  subscribeToPlanItems() {
    this.planItemsSubscriber.subscribeCollectionUpdates(this.state.plan, (planItemList: PlanItem[]) =>
      this.setState({ planItemList }),
    );
  }

  unsubscribeToPlanItems() {
    this.planItemsSubscriber.unsubscribeCollectionUpdates();
  }

  componentDidMount() {
    if (this.state.plan) {
      this.subscribeToPlanItems();
    }
  }

  componentWillUnmount() {
    if (this.state.plan) {
      this.unsubscribeToPlanItems();
    }
  }

  validatePlan = async ({ planInput }: PlanFormData): Promise<void> => {
    const errors: PlanFormError = {};
    if (planInput === '') {
      errors.planInput = i18n.t('validation:planNameRequired');
      throw errors;
    }

    const { id } = this.props.navigation.getParam('student');
    const isPlanExist: boolean = await Plan.isPlanExist(id, planInput);

    if (isPlanExist) {
      errors.planInput = i18n.t('validation:duplicatedPlan');
      throw errors;
    }
  };

  createPlan = async (name: string) => {
    const { id } = this.props.navigation.getParam('student');

    const plan = await Plan.createPlan(id, name);

    this.setState({ plan }, () => {
      this.subscribeToPlanItems();
    });
  };

  updatePlan = async (name: string, emoji: string) => {
    await this.state.plan.update({
      name,
      emoji,
    });

    this.setState({ plan: { ...this.state.plan, name } });
  };

  onSubmit = ({ planInput, emoji }: PlanFormData) =>
    this.state.plan ? this.updatePlan(planInput, emoji) : this.createPlan(planInput);

  navigateToCreatePlanItem = async () => {
    const { plan, planItemList } = this.state;

    this.props.navigation.navigate('PlanItemTask', {
      plan,
      planItemList,
    });
  };

  render() {
    const { plan, planItemList } = this.state;

    return (
      <>
        <FullScreenTemplate>
          <View style={styles.headerContainer}>
            <PlanForm onSubmit={this.onSubmit} plan={plan} onValidate={this.validatePlan} />
            {!isEmpty(planItemList) && <TaskTableHeader />}
          </View>
          <TaskTable planItemList={planItemList} />
        </FullScreenTemplate>
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
