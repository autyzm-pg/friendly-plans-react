import React from 'react';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { PlanItemForm, PlanItemFormData } from './PlanItemForm';

interface State {
  planItem: PlanItem;
  taskType: PlanItemType;
}

export class PlanItemTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  state: State = {
    planItem: this.props.navigation.getParam('planItem'),
    taskType: PlanItemType.SimpleTask,
  };

  handleChangeText = (name: string) => {
    this.setState({
      planItem: { ...this.state.planItem, name },
    });
  };

  changePlanItemType = (isSimpleTask: boolean) => {
    this.setState({
      taskType: isSimpleTask ? PlanItemType.SimpleTask : PlanItemType.ComplexTask,
    });
  };

  createPlanItem = async (name: string) => {
    const plan = this.props.navigation.getParam('plan');

    const planItem = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, name);

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
    return (
      <FullScreenTemplate darkBackground>
        <PlanItemForm planItem={planItem} onSubmit={this.onSubmit} />
      </FullScreenTemplate>
    );
  }
}
