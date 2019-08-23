import React from 'react';
import { RNFirebase } from 'react-native-firebase';

import { NavigationService } from '../../../services';
import { Plan, PlanItem, Student, PlanSubItem } from 'models';
import { FlatList } from 'react-native';
import { PlanItemListItem } from './PlanItemListItem';

interface Props {
  itemParent: Plan | PlanItem;
  student: Student;
  onGoBack: any;
}

interface State {
  items: PlanItem[] | PlanSubItem[];
  student: Student;
}

export class PlanItemList extends React.PureComponent<Props, State> {
  itemsRef: any;
  unsubscribeItems: any;
  studentRef: any;
  unsubscribeStudent: any;
  state: Readonly<State> = {
    items: [],
    student: this.props.student,
  };

  componentDidMount() {
    this.studentRef = this.props.student.getStudentRef();
    this.unsubscribeStudent = this.studentRef.onSnapshot(this.handleStudentChange);
    if (this.props.itemParent instanceof Plan) {
      this.itemsRef = this.props.itemParent.getPlanItemsRef();
      this.unsubscribeItems = this.itemsRef.onSnapshot(this.handlePlanItemsChange);
    } else {
      this.itemsRef = this.props.itemParent.getSubItemsRef();
      this.unsubscribeItems = this.itemsRef.onSnapshot(this.handleSubItemsChange);
    }
  }

  handlePlanItemsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const items: PlanItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ items });
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
    const items: PlanSubItem[] = querySnapshot.docs.map(doc =>
      Object.assign(new PlanSubItem(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ items });
  };

  componentWillUnmount() {
    this.unsubscribeStudent();
    this.unsubscribeItems();
  }

  componentDidUpdate() {
    if (this.state.items.length!! && this.completedPlanItemCounter() >= this.state.items.length
      && this.props.itemParent instanceof PlanItem) {
        this.props.onGoBack();
        NavigationService.goBack();
    }
  }

  completedPlanItemCounter() {
    return this.state.items.reduce((planItemsCompleted, planItem) =>
      planItem.completed ? ++planItemsCompleted : planItemsCompleted, 0);
  }

  renderItem = ({ item, index }: { item: PlanItem; index: number }) => (
    <PlanItemListItem
      student={this.state.student}
      itemParent={this.props.itemParent}
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
