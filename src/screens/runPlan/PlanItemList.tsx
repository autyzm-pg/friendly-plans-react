import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { Plan, PlanItem } from 'models';
import { FlatList } from 'react-native';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  plan: Plan;
}

interface State {
  planItems: PlanItem[];
}

export class PlanItemList extends React.PureComponent<Props, State> {
  planItemsRef: any;
  state = {
    planItems: [],
  };

  componentDidMount() {
    this.planItemsRef = this.props.plan.getPlanItemsRef();
    this.planItemsRef.onSnapshot(this.handlePlanItemsChange);
  }

  handlePlanItemsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const planItems: PlanItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ planItems });
  };

  renderItem = ({ item }: { item: PlanItem }) => (
    <PlanItemListItem
      planItem={item}
    />
  );

  render() {
    return (
      <FlatList
        data={this.state.planItems}
        renderItem={this.renderItem}
      />
    );
  }
}
