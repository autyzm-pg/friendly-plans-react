import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { PlanItem, PlanSubItem } from 'models';
import { FlatList } from 'react-native';
import { PlanSubItemListItem } from './PlanSubItemListItem';

interface Props {
  planItem: PlanItem;
  textSize: string;
  textCase: string;
}

interface State {
  subItems: PlanSubItem[];
}

export class PlanSubItemList extends React.PureComponent<Props, State> {
  subItemsRef: any;
  unsubscribeSubItems: any;

  state: Readonly<State> = {
    subItems: [],
  };

  componentDidMount() {
    this.subItemsRef = this.props.planItem.getSubItemsRef();
    this.unsubscribeSubItems = this.subItemsRef.onSnapshot(this.handleSubItemsChange);
  }

  handleSubItemsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const subItems: PlanSubItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanSubItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ subItems });
  };

  componentWillUnmount() {
    this.unsubscribeSubItems();
  }

  completedSubItemCounter() {
    return this.state.subItems.reduce((planSubItemsCompleted, planSubItem) =>
        planSubItem.completed ? ++planSubItemsCompleted : planSubItemsCompleted, 0);
  }

  renderItem = ({ item, index }: { item: PlanSubItem; index: number }) => (
    <PlanSubItemListItem
      subItem={item}
      planItem={this.props.planItem}
      index={index}
      textSize={this.props.textSize}
      textCase={this.props.textCase}
      currentTaskIndex={this.completedSubItemCounter()}
    />
  );

  extractKey = (planSubItem: PlanSubItem) => planSubItem.id;

  render() {
    return (
      <FlatList
        data={this.state.subItems}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
