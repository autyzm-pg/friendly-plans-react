import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { Student, Plan, PlanItem } from 'models';
import { FlatList } from 'react-native';
import { PlanItemListItem } from './PlanItemListItem';
import { StudentList } from '../dashboard/StudentList';

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
  studentRef: any;
  state = {
    planItems: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.planItemsRef = this.props.plan.getPlanItemsRef();
    this.planItemsRef.onSnapshot(this.handlePlanItemsChange);
    this.studentRef = this.props.student.getStudentRef();
    this.studentRef.onSnapshot(this.handleStudentChange);
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
      this.setState({ student: documentSnapshot.data() });
    }
  }

  completedPlanItemCounter() {
    return this.state.planItems.reduce((planItemsCompleted, planItem) =>
      planItem.completed ? ++planItemsCompleted : planItemsCompleted, 0); 
  };

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
