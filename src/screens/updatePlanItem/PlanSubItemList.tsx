import React from 'react';

import { PlanItem } from 'models';
import { FlatList } from 'react-native';
import { PlanSubItem } from '../../models';
import { ModelSubscriber } from '../../models/ModelSubscriber';
import { NavigationService } from '../../services';
import { PlanSubItemListItem } from './PlanSubItemListItem';

interface Props {
  planItem: PlanItem;
}

interface State {
  planSubItems: PlanSubItem[];
}

export class PlanSubItemList extends React.PureComponent<Props, State> {
  planSubItemsSubscriber: ModelSubscriber<PlanSubItem> = new ModelSubscriber();

  constructor(props: Props) {
    super(props);
    this.state = {
      planSubItems: [],
    };
  }

  componentDidMount() {
    this.planSubItemsSubscriber.subscribeCollectionUpdates(
      this.props.planItem,
      planSubItems => this.setState({ planSubItems }),
    );
  }

  componentWillUnmount() {
    this.planSubItemsSubscriber.unsubscribeCollectionUpdates();
  }

  navigateToPlanSubItemUpdate = (planSubItem: PlanSubItem) => {
    NavigationService.navigate('UpdatePlanSubItem', { planSubItem });
  };

  renderItem = ({ item, index }: { item: PlanSubItem; index: number }) => {
    const handleNavigation = () => this.navigateToPlanSubItemUpdate(item);

    return (
      <PlanSubItemListItem
        planSubItem={item}
        index={index}
        onDelete={item.delete}
        onUpdate={handleNavigation}
      />
    );
  };

  extractKey = (planSubItem: PlanSubItem) => planSubItem.id;

  render() {
    return (
      <FlatList
        data={this.state.planSubItems}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
