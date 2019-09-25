import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Plan, Student } from 'models';
import { ModelSubscriber } from '../../models/ModelSubscriber';
import EmptyStudentPlans from './EmptyStudentPlans';
import StudentPlanListItem from './StudentPlanListItem';

interface Props {
  student: Student;
}

interface State {
  plans: Plan[];
}

export class StudentPlanList extends React.PureComponent<Props, State> {
  plansSubscriber: ModelSubscriber<Plan> = new ModelSubscriber();
  state: Readonly<State> = {
    plans: [],
  };

  subscribeToPlans() {
    this.plansSubscriber.subscribeCollectionUpdates(this.props.student, plans => this.setState({ plans }));
  }

  unsubsribeToPlans() {
    this.plansSubscriber.unsubscribeCollectionUpdates();
  }

  componentDidMount() {
    this.subscribeToPlans();
  }

  componentDidUpdate() {
    this.unsubsribeToPlans();
    this.subscribeToPlans();
  }

  componentWillUnmount() {
    this.unsubsribeToPlans();
  }

  extractKey = (plan: Plan) => plan.id;

  renderItem = ({ item }: { item: Plan }) => <StudentPlanListItem plan={item} student={this.props.student} />;

  render() {
    const { plans } = this.state;

    if (!plans) {
      return <EmptyStudentPlans />;
    }

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
    width: '100%',
  },
  columnWrapper: {
    marginEnd: 12,
  },
});
