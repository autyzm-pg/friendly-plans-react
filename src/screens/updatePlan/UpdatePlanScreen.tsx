import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { PlanItem, PlanItemType, StudentDisplayOption } from 'models';
import { ModelSubscriber } from '../../models/ModelSubscriber';
import { CreatePlanItemButton } from './CreatePlanItemButton';
import { PlanHeader } from './PlanHeader';
import { PlanItemList } from './PlanItemList';

interface State {
  planItems: PlanItem[];
}

export class UpdatePlanScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = ({ navigation }: NavigationInjectedProps) => {
    return {
      title: i18n.t('updatePlan:screenTitle', {
        studentName: navigation.getParam('student').name,
      }),
    };
  };

  plan = this.props.navigation.getParam('plan');
  student = this.props.navigation.getParam('student');

  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();
  state: Readonly<State> = {
    planItems: [],
  };

  componentDidMount() {
    this.planItemsSubscriber.subscribeCollectionUpdates(this.plan, planItems => this.setState({ planItems }));
  }

  componentWillUnmount() {
    this.planItemsSubscriber.unsubscribeCollectionUpdates();
  }

  createPlanItem = (planItemType: PlanItemType) => {
    PlanItem.create(this.plan, planItemType, this.state.planItems.length);
  };

  navigateToRunPlan = () => {
    switch (this.student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        this.props.navigation.navigate('RunPlanSlide', {
          plan: this.plan,
          student: this.student,
        });
        break;
      default:
        this.props.navigation.navigate('RunPlanList', {
          student: this.student,
          itemParent: this.plan,
        });
    }
  };

  render() {
    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanHeader plan={this.plan} onRunPlan={this.navigateToRunPlan} />
          <PlanItemList plan={this.plan} planItems={this.state.planItems} />
        </Card>
        <CreatePlanItemButton plan={this.plan} handlePress={this.createPlanItem} />
      </FullScreenTemplate>
    );
  }
}
