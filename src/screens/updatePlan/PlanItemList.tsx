import React from 'react';

import { Plan, PlanItem } from 'models';
import { FlatList } from 'react-native';
import { ModelSubscriber } from '../../models/ModelSubscriber';
import { NavigationService } from '../../services';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  plan: Plan;
}

interface State {
  planItems: PlanItem[];
}

export class PlanItemList extends React.PureComponent<Props, State> {
  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();
  state: Readonly<State> = {
    planItems: [],
  };

  componentDidMount() {
    this.planItemsSubscriber.subscribeCollectionUpdates(
      this.props.plan,
      planItems => this.setState({ planItems }),
    );
  }

  componentWillUnmount() {
    this.planItemsSubscriber.unsubscribeCollectionUpdates();
  }

  navigateToPlanItemUpdate = (planItem: PlanItem) => {
    NavigationService.navigate('UpdatePlanItem', {
      planItem,
    });
  };

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => {
    const handleNavigation = () => this.navigateToPlanItemUpdate(item);

    return (
      <PlanItemListItem
        onDelete={item.delete}
        onUpdate={handleNavigation}
        planItem={item}
        index={index}
      />
    );
  };

  extractKey = (planItem: PlanItem) => planItem.id;

  render() {
    return (
      <FlatList
        data={this.state.planItems}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
