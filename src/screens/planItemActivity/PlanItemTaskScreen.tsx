import React from 'react';

import { i18n } from 'locale';
import { Plan, PlanItem, PlanItemFormData, PlanItemType } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { CreateTaskScreen } from './CreateTaskScreen/CreateTaskScreen';

interface State {
  planItem: PlanItem;
  plan: Plan;
}

export class PlanItemTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };
  state: State = {
    planItem: this.props.navigation.getParam('planItem'),
    plan: this.props.navigation.getParam('plan'),
  };

  getLastItemOrder = (): number => {
    const planItemList = this.props.navigation.getParam('planItemList');
    if (!planItemList.length) {
      return 0;
    }
    const { order } = planItemList[planItemList.length - 1];
    return order;
  };

  createPlanItem = async (data: PlanItemFormData) => {
    const { plan } = this.state;

    if (data.taskType === PlanItemType.ComplexTask) {
      const planItem = await this.createComplexTask(data, plan);
      this.setState({ planItem });
    } else {
      const planItem = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, data, this.getLastItemOrder());
      this.setState({ planItem });
    }
  };

  createComplexTask = async (data: PlanItemFormData, plan: any) => {
    const planSubtask = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, data, this.getLastItemOrder());
    const planItem = await PlanItem.createPlanItem(plan, PlanItemType.ComplexTask, data, this.getLastItemOrder());
    await planItem.addSubtask(planSubtask);
    await planSubtask.setParent(planItem);
    return planItem;
  };

  createSubtask = async (data: PlanItemFormData, order: number) => {
    const { planItem, plan } = this.state;
    const planSubtask = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, data, order);
    await planItem.addSubtask(planSubtask);
    await planSubtask.setParent(planItem);
  };

  updatePlanItem = async (formData: PlanItemFormData) => {
    const { name, nameForChild, time, taskType } = formData;
    if (taskType === PlanItemType.SimpleTask && this.state.planItem.type === taskType) {
      await this.state.planItem.update({
        name,
        nameForChild,
        time,
      });
    } else {
      if (taskType === PlanItemType.SimpleTask) {
        await this.state.planItem.deleteAllSubtasks();
      }

      await this.state.planItem.update({
        name,
        time,
        type: taskType,
      });
    }

    this.setState({ planItem: { ...this.state.planItem, name, nameForChild, time } });
  };

  handleTitleChange = (name: string) => {
    this.props.navigation.setParams({ title: name });
  };

  onSubmit = (formData: PlanItemFormData) =>
    this.state.planItem ? this.updatePlanItem(formData) : this.createPlanItem(formData);

  render() {
    const { planItem } = this.state;

    const planItemList = this.props.navigation.getParam('planItemList');
    const planItemListCount = planItemList ? planItemList.length + 1 : 0;
    return (
      <CreateTaskScreen
        planItem={planItem}
        taskNumber={planItemListCount}
        onSubmit={this.onSubmit}
        onSubtask={this.createSubtask}
        onTitleUpdated={this.handleTitleChange}
      />
    );
  }
}
