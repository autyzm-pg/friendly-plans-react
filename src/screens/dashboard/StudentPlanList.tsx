import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Plan, Student } from 'models';
import {ModelSubscriber} from '../../models/ModelSubscriber';
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

  componentDidMount() {
    this.plansSubscriber.subscribeCollectionUpdates(
      this.props.student, plans => this.setState({ plans })
    );
  }

  componentWillUnmount() {
    this.plansSubscriber.unsubscribeCollectionUpdates();
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
