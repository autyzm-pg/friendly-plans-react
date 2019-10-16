import isEmpty from 'lodash.isempty';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationFocusInjectedProps, withNavigationFocus } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Plan, PlanItem, PlanItemType } from 'models';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanSubItemButton } from './FixedCreatePlanSubItemButton';
import { PlanForm, PlanFormData } from './PlanForm';
import { TaskTable } from './TaskTable';
import { TaskTableHeader } from './TaskTableHeader';

export const NAVIGATION_MAP = {
  [PlanItemType.SimpleTask]: 'PlanItemSimpleTask',
  [PlanItemType.Interaction]: 'PlanItemSimpleTask',
  [PlanItemType.Break]: 'PlanItemSimpleTask',
};

interface State {
  planItemList: PlanItem[];
  plan: Plan;
}

class PlanActivity extends React.PureComponent<NavigationFocusInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state: State = {
    plan: this.props.navigation.getParam('plan'),
    planItemList: [],
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

  componentDidUpdate(prevProps: NavigationFocusInjectedProps) {
    if (prevProps.isFocused !== this.props.isFocused && this.state.plan) {
      this.unsubscribeToPlanItems();
      this.subscribeToPlanItems();
    }
  }

  componentWillUnmount() {
    if (this.state.plan) {
      this.unsubscribeToPlanItems();
    }
  }

  navigateToCreatePlanItem = async (itemType: string) => {
    const student = this.props.navigation.getParam('student');
    const plan = this.state.plan;

    this.props.navigation.navigate(NAVIGATION_MAP[itemType], {
      student,
      plan,
    });
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

  render() {
    const { plan, planItemList } = this.state;

    return (
      <FullScreenTemplate darkBackground>
        <>
          <View style={styles.headerContainer}>
            <PlanForm onSubmit={this.onSubmit} plan={plan} />
            {!isEmpty(planItemList) && <TaskTableHeader />}
          </View>
          <TaskTable rowList={planItemList} />
          {plan && <FixedCreatePlanSubItemButton onPress={this.navigateToCreatePlanItem} />}
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

export default withNavigationFocus(PlanActivity);
