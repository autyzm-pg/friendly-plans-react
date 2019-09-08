import React from 'react';
import { FlatList } from 'react-native';

import { ModelSubscriber, Plan, PlanElement, PlanItem, Student } from 'models';
import { PlanElementListItem } from './PlanElementListItem';

interface Props {
  itemParent: Plan | PlanItem;
  student: Student;
  onGoBack: any;
}

interface State {
  items: PlanElement[];
  student: Student;
}

export class PlanElementList extends React.PureComponent<Props, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();
  planElementsSubscriber: ModelSubscriber<PlanElement> = new ModelSubscriber();
  state: Readonly<State> = {
    items: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.studentSubscriber.subscribeElementUpdates(this.props.student, student => this.setState({ student }));
    this.planElementsSubscriber.subscribeCollectionUpdates(this.props.itemParent, elements =>
      this.setState({ items: elements }),
    );
  }

  componentWillUnmount() {
    this.studentSubscriber.unsubscribeElementUpdates();
    this.planElementsSubscriber.unsubscribeCollectionUpdates();
  }

  componentDidUpdate() {
    if (this.isEveryPlanItemCompleted()) {
      this.props.onGoBack();
      this.updateAllItemsAsUncompleted();
    }
  }

  updateAllItemsAsUncompleted = () => {
    this.state.items.map((item: PlanElement) => {
      item.update({ completed: false });
    });
  };

  isEveryPlanItemCompleted() {
    return this.state.items.length && this.completedPlanItemCounter() >= this.state.items.length;
  }

  completedPlanItemCounter() {
    return this.state.items.reduce(
      (planItemsCompleted, planItem) => (planItem.completed ? ++planItemsCompleted : planItemsCompleted),
      0,
    );
  }

  renderItem = ({ item, index }: { item: PlanElement; index: number }) => (
    <PlanElementListItem
      student={this.state.student}
      itemParent={this.props.itemParent}
      item={item}
      index={index}
      currentTaskIndex={this.completedPlanItemCounter()}
    />
  );

  extractKey = (planElement: PlanElement) => planElement.id;

  render() {
    return <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.extractKey} />;
  }
}
