import isEmpty from 'lodash.isempty';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { i18n } from 'locale';
import { ModelSubscriber, Plan, PlanItem } from 'models';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanItemButton } from './FixedCreatePlanItemButton';
import { PlanForm, PlanFormData } from './PlanForm';
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
    const plan = this.state.plan;

    this.props.navigation.navigate('PlanItemTask', {
      plan,
    });
  };

  render() {
    const { plan, planItemList } = this.state;

    return (
      <>
        <View style={styles.headerContainer}>
          <PlanForm onSubmit={this.onSubmit} plan={plan} />
          {!isEmpty(planItemList) && <TaskTableHeader />}
        </View>
        <TaskTable planItemList={planItemList} />
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
