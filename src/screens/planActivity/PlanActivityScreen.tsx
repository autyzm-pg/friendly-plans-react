import every from 'lodash.every';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DragEndParams } from 'react-native-draggable-flatlist';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Plan, PlanItem } from 'models';
import { Route } from 'navigation';
import { getElevation, palette } from 'styles';
import { FixedCreatePlanItemButton } from './FixedCreatePlanItemButton';
import { PlanForm, PlanFormData, PlanFormError } from './PlanForm';
import { TaskTable } from './TaskTable';

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

    const { id: planId } = { ...this.state.plan };

    const isPlanExist: boolean = await Plan.isPlanExist(id, planInput, planId);

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

    this.props.navigation.navigate(Route.PlanItemTask, {
      plan,
      planItemList,
    });
  };

  shuffleDisabled(): boolean {
    const { planItemList } = this.state;

    return !planItemList || planItemList.length < 2;
  }

  playDisabled(): boolean {
    const { planItemList } = this.state;
    if (!planItemList) {
      return true;
    }

    return every(planItemList, 'completed');
  }

  handlePlanListOrderChanged = ({ data }: DragEndParams<PlanItem>) => {
    const planItemListRightOrder = data.map((item, index) => ({ ...item, order: index + 1 }));
    planItemListRightOrder.forEach(item => item.setOrder(item.order));
    this.setState({ planItemList: planItemListRightOrder });
  };

  render() {
    const { plan, planItemList } = this.state;
    return (
      <>
        <FullScreenTemplate extraStyles={styles.fullScreen}>
          <View style={styles.headerContainer}>
            <PlanForm
              onSubmit={this.onSubmit}
              plan={plan}
              onValidate={this.validatePlan}
              shuffleDisabled={this.shuffleDisabled()}
              playDisabled={this.playDisabled()}
            />
          </View>
          <TaskTable planItemList={planItemList} handlePlanListOrderChanged={this.handlePlanListOrderChanged} />
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
  fullScreen: {
    paddingHorizontal: 24,
    backgroundColor: palette.backgroundSurface,
  },
});
