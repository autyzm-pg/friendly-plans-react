import React from 'react';

import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { PlanItemForm, PlanItemFormData } from './PlanItemForm';

interface State {
  planItem: PlanItem;
}

export class PlanItemTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  state: State = {
    planItem: this.props.navigation.getParam('planItem'),
  };

  getLastItemOrder = (): number => {
    const planItemList = this.props.navigation.getParam('planItemList');
    if (!planItemList.length) {
      return 0;
    }
    const { order } = planItemList[planItemList.length - 1];
    return order;
  };

  createPlanItem = async (name: string) => {
    const plan = this.props.navigation.getParam('plan');

    const planItem = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, name, this.getLastItemOrder());

    this.setState({ planItem });
  };

  updatePlanItem = async (formData: PlanItemFormData) => {
    const { name, nameForChild } = formData;
    await this.state.planItem.update({
      name,
      nameForChild,
    });

    this.setState({ planItem: { ...this.state.planItem, name, nameForChild } });
  };

  onSubmit = (formData: PlanItemFormData) =>
    this.state.planItem ? this.updatePlanItem(formData) : this.createPlanItem(formData.name);

  render() {
    const { planItem } = this.state;
    return <PlanItemForm planItem={planItem} onSubmit={this.onSubmit} />;
  }
}
