import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RNFirebase } from 'react-native-firebase';

import { Plan, Student } from 'models';
import StudentPlanListItem from './StudentPlanListItem';

interface Props {
  student: Student;
}

interface State {
  plans: Plan[];
}

export class StudentPlanList extends React.PureComponent<Props, State> {
  studentPlansRef: any;
  unsubscribeStudentPlans: any;
  state = {
    plans: [],
  };

  componentDidMount() {
    this.studentPlansRef = this.props.student.getPlansRef();
    this.unsubscribeStudentPlans = this.studentPlansRef.onSnapshot(this.handlePlansChange);
  }

  handlePlansChange = (querySnapshot: RNFirebase.firestore.QuerySnapshot) => {
    const plans: Plan[] = querySnapshot.docs.map(doc =>
      Object.assign(new Plan(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ plans });
  };

  componentWillUnmount() {
    this.unsubscribeStudentPlans();
  }

  extractKey = (plan: Plan) => plan.id;

  renderItem = ({ item }: { item: Plan }) => (
    <StudentPlanListItem plan={item} student={this.props.student} />
  );

  render() {
    return (
      <FlatList
        data={this.state.plans}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.contentContainer}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 12,
  },
  columnWrapper: {
    marginEnd: 12,
  },
});
