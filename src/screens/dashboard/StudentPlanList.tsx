import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Plan, Student } from 'models';
import {PlanRepository} from '../../models/repository/PlanRepository';
import StudentPlanListItem from './StudentPlanListItem';

interface Props {
  student: Student;
}

interface State {
  plans: Plan[];
}

export class StudentPlanList extends React.PureComponent<Props, State> {
  planRepository: PlanRepository = new PlanRepository();
  state: State = {
    plans: [],
  };

  componentDidMount() {
    this.planRepository.subscribeCollectionUpdates(this.props.student.id, plans => this.setState({ plans }));
  }

  componentWillUnmount() {
    this.planRepository.unsubscribeCollectionUpdates();
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
