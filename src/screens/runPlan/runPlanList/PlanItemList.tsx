import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { Plan, PlanItem, Student } from 'models';
import { FlatList } from 'react-native';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  plan: Plan;
  student: Student;
}

interface State {
  planItems: PlanItem[];
  student: Student;
}

export class PlanItemList extends React.PureComponent<Props, State> {
  planItemsRef: any;
  unsubscribePlanItems: any;
  studentRef: any;
  unsubscribeStudent: any;
  state: Readonly<State> = {
    planItems: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.planItemsRef = this.props.plan.getPlanItemsRef();
    this.unsubscribePlanItems = this.planItemsRef.onSnapshot(this.handlePlanItemsChange);
    this.studentRef = this.props.student.getStudentRef();
    this.unsubscribeStudent = this.studentRef.onSnapshot(this.handleStudentChange);
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

  handleStudentChange = (documentSnapshot: RNFirebase.firestore.DocumentSnapshot) => {
    if(documentSnapshot.exists){
      const student = Object.assign(new Student(), {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
      this.setState({ student });
    }
  }

  componentWillUnmount() {
    this.unsubscribePlanItems();
    this.unsubscribeStudent();
  }

  completedPlanItemCounter() {
    return this.state.planItems.reduce((planItemsCompleted, planItem) =>
      planItem.completed ? ++planItemsCompleted : planItemsCompleted, 0);
  }

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => (
    <PlanItemListItem
      planItem={item}
      index={index}
      textSize={this.state.student.textSize}
      textCase={this.state.student.textCase}
      currentTaskIndex={this.completedPlanItemCounter()}
    />
  );

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
