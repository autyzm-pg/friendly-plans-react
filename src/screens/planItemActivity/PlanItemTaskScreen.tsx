import React from 'react';

import { i18n } from 'locale';
import { PlanItem, PlanItemType } from 'models';
import { NavigationInjectedProps } from 'react-navigation';
import { PlanItemForm, PlanItemFormData } from './PlanItemForm';

interface State {
  planItem: PlanItem;
  planItemImage: string;
}

export class PlanItemTaskScreen extends React.PureComponent<NavigationInjectedProps, State> {
  
  static navigationOptions = {
    title: i18n.t('planItemActivity:viewTitleTask'),
  };

  state: State = {
    planItem: this.props.navigation.getParam('planItem'),
    planItemImage: "",
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
    const plan = this.props.navigation.getParam('plan');

    const planItem = await PlanItem.createPlanItem(plan, PlanItemType.SimpleTask, data, this.getLastItemOrder(), this.state.planItemImage);

    this.setState({ planItem });

    console.log("image create" + this.state.planItemImage);
  };

  updatePlanItem = async (formData: PlanItemFormData) => {
    const { name, nameForChild, time } = formData;
    await this.state.planItem.update({
      name,
      nameForChild,
      time,
    });

    this.setState({ planItem: { ...this.state.planItem, name, nameForChild, time } });

    const {planItem} = this.state;
    if (planItem) {
      planItem.changeImage(this.state.planItemImage);
    }
    this.setState({planItem: planItem});

    console.log("image update" + this.state.planItemImage);
  };

  updatePlanImage = (image: string) => {
    this.setState({planItemImage: image});
  }

  onSubmit = (formData: PlanItemFormData) => 
    this.state.planItem ? this.updatePlanItem(formData) : this.createPlanItem(formData);

  render() {
    const { planItem } = this.state;

    const planItemList = this.props.navigation.getParam('planItemList');
    const planItemListCount = planItemList ? planItemList.length + 1 : 0;
    
    return <PlanItemForm planItem={this.state.planItem} onSubmit={this.onSubmit} taskNumber={planItemListCount} updatePlanImage = {this.updatePlanImage}/>;
  }
}
