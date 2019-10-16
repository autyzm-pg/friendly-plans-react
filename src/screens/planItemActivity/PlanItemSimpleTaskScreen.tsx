import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, PlanItem, PlanItemType } from 'models';
import { PlanItemForm, PlanItemFormData } from './PlanItemForm';

interface State {
  planItem: PlanItem;
}

export class PlanItemSimpleTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };
  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();

  state: State = {
    planItem: this.props.navigation.getParam('planItem'),
  };

  createPlanItem = async (name: string) => {
    const plan = this.props.navigation.getParam('plan');
    const planItem = plan && (await PlanItem.createPlanItem(plan, name, PlanItemType.SimpleTask));

    this.setState({ planItem });
  };

  updatePlanItemName = async (name: string) => {
    await this.state.planItem.update({
      name,
    });

    this.setState({ planItem: { ...this.state.planItem, name } });
  };

  onSubmit = ({ planItemName }: PlanItemFormData) =>
    this.state.planItem ? this.updatePlanItemName(planItemName) : this.createPlanItem(planItemName);

  render() {
    const { planItem } = this.state;

    return (
      <FullScreenTemplate darkBackground>
        <PlanItemForm planItem={planItem} onSubmit={this.onSubmit} />
      </FullScreenTemplate>
    );
  }
}
