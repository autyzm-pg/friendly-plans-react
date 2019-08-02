import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { Student, Plan, PlanItem } from 'models';
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
  state = {
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
      this.setState({ student: documentSnapshot.data() });
    }
  }

  componentWillUnmount() {
    this.unsubscribePlanItems();
    this.unsubscribeStudent();
  }

  completedPlanItemCounter() {
    let countCompletedPlanItems = 0;
    for (let planItem of this.state.planItems){
      if(planItem.completed == true)
        countCompletedPlanItems++;
    }
    return countCompletedPlanItems;
  };

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => (
    <PlanItemListItem
      planItem={item}
      index={index}
      student={this.state.student}
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
