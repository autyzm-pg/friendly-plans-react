import React from 'react';

import { Plan, PlanItem } from 'models';
import { FlatList } from 'react-native';
import { NavigationService } from '../../services';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  plan: Plan;
  planItems: PlanItem[];
}

export class PlanItemList extends React.PureComponent<Props> {
  navigateToPlanItemUpdate = (planItem: PlanItem) => {
    NavigationService.navigate('UpdatePlanItem', {
      planItem,
    });
  };

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => {
    const handleNavigation = () => this.navigateToPlanItemUpdate(item);

    return <PlanItemListItem onDelete={item.delete} onUpdate={handleNavigation} planItem={item} index={index} />;
  };

  extractKey = (planItem: PlanItem) => planItem.id;

  render() {
    return <FlatList data={this.props.planItems} renderItem={this.renderItem} keyExtractor={this.extractKey} />;
  }
}
