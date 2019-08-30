import React from 'react';
import { FlatList } from 'react-native';

import { Plan, PlanItem, Student } from 'models';
import {ModelSubscriber} from '../../../models/ModelSubscriber';
import {PlanElement} from '../../../models/PlanElement';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  itemParent: Plan | PlanItem;
  student: Student;
  onGoBack: any;
}

interface State {
  items: PlanElement[];
  student: Student;
}

export class PlanItemList extends React.PureComponent<Props, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();
  planElementsSubscriber: ModelSubscriber<PlanElement> = new ModelSubscriber();
  itemsRef: any;
  unsubscribeItems: any;
  state: Readonly<State> = {
    items: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.studentSubscriber.subscribeElementUpdates(
      this.props.student, (student) => this.setState({ student })
    );
    this.planElementsSubscriber.subscribeCollectionUpdates(
      this.props.itemParent, (elements) => this.setState({ items: elements })
    );
  }

  componentWillUnmount() {
    this.studentSubscriber.unsubscribeElementUpdates();
    this.planElementsSubscriber.unsubscribeCollectionUpdates();
  }

  componentDidUpdate() {
    if (this.isEveryPlanItemCompleted()) {
        this.props.onGoBack();
    }
  }

  isItemParentPlan() {
    return (this.props.itemParent instanceof Plan);
  }

  isEveryPlanItemCompleted() {
    return (this.state.items.length && this.completedPlanItemCounter() >= this.state.items.length);
  }

  completedPlanItemCounter() {
    return this.state.items.reduce((planItemsCompleted, planItem) =>
      planItem.completed ? ++planItemsCompleted : planItemsCompleted, 0);
  }

  renderItem = ({ item, index }: { item: PlanElement; index: number }) => (
    <PlanItemListItem
      student={this.state.student}
      itemParent={this.props.itemParent}
      item={item}
      index={index}
      currentTaskIndex={this.completedPlanItemCounter()}
    />
  );

  extractKey = (planElement: PlanElement) => planElement.id;

  render() {
    return (
      <FlatList
        data={this.state.items}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
