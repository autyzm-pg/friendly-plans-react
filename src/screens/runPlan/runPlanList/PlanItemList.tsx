import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { Plan, PlanItem, Student, PlanSubItem } from 'models';
import { FlatList } from 'react-native';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  parentItem: Plan | PlanItem;
  student: Student;
}

interface State {
  items: PlanItem[] | PlanSubItem[];
  student: Student;
}

export class PlanItemList extends React.PureComponent<Props, State> {
  planItemsRef: any;
  unsubscribePlanItems: any;
  studentRef: any;
  unsubscribeStudent: any;
  subItemsRef: any;
  unsubscribeSubItems: any;
  state: Readonly<State> = {
    items: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.studentRef = this.props.student.getStudentRef();
    this.unsubscribeStudent = this.studentRef.onSnapshot(this.handleStudentChange);
    if (this.props.parentItem instanceof Plan) {
      this.planItemsRef = this.props.parentItem.getPlanItemsRef();
      this.unsubscribePlanItems = this.planItemsRef.onSnapshot(this.handlePlanItemsChange);
    } else {
      this.planItemsRef = this.props.parentItem.getSubItemsRef();
      this.unsubscribePlanItems = this.planItemsRef.onSnapshot(this.handleSubItemsChange);
    }
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
    this.setState({ items: planItems });
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

  handleSubItemsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const planItems: PlanSubItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanSubItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ items: planItems });
  };

  componentWillUnmount() {
    this.unsubscribeStudent();
    this.unsubscribePlanItems();
  }

  completedPlanItemCounter() {
    return this.state.items.reduce((planItemsCompleted, planItem) =>
      planItem.completed ? ++planItemsCompleted : planItemsCompleted, 0);
  }

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => (
    <PlanItemListItem
      student={this.state.student}
      itemParent={this.props.parentItem}
      item={item}
      index={index}
      currentTaskIndex={this.completedPlanItemCounter()}
    />
  );

  extractKey = (planItem: PlanItem) => planItem.id;

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
