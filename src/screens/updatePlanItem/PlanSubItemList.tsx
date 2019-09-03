import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { PlanItem } from 'models';
import { FlatList } from 'react-native';
import { PlanSubItem } from '../../models/PlanSubItem';
import { NavigationService } from '../../services';
import { PlanSubItemListItem } from './PlanSubItemListItem';

interface Props {
  planItem: PlanItem;
}

interface State {
  planSubItems: PlanSubItem[];
}

export class PlanSubItemList extends React.PureComponent<Props, State> {
  unsubscribePlanSubItems: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      planSubItems: [],
    };
  }

  componentDidMount() {
    const planSubItemsRef = this.props.planItem.getSubItemsRef();
    this.unsubscribePlanSubItems = planSubItemsRef.onSnapshot(
      this.handlePlanSubItemsChange,
    );
  }

  handlePlanSubItemsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const planSubItems: PlanSubItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanSubItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ planSubItems });
  };

  componentWillUnmount() {
    this.unsubscribePlanSubItems();
  }

  navigateToPlanSubItemUpdate = (planSubItem: PlanSubItem) => {
    NavigationService.navigate('UpdatePlanSubItem', { planSubItem });
  };

  renderItem = ({ item, index }: { item: PlanSubItem; index: number }) => (
    <PlanSubItemListItem
      planSubItem={item}
      index={index}
      onDelete={() => this.props.planItem.deletePlanSubItem(item.id)}
      onUpdate={() => this.navigateToPlanSubItemUpdate(item)}
    />
  );

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
