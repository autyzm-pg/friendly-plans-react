import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { ModelSubscriber, Plan, Student } from 'models';
import { Route } from 'navigation';
import EmptyStudentPlans from './EmptyStudentPlans';
import { FixedCreatePlanButton } from './FixedCreatePlanButton';
import StudentPlanListItem from './StudentPlanListItem';

interface Props extends NavigationInjectedProps {
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

  navigateToCreatePlan = () => {
    const student = this.props.navigation.getParam('student');

    this.props.navigation.navigate(Route.PlanActivity, {
      student,
    });
  };

  render() {
    const { plans } = this.state;

    if (!plans.length) {
      return <EmptyStudentPlans />;
    }

    return (
      <>
        <FullScreenTemplate padded darkBackground>
          <FlatList
            data={this.state.plans}
            renderItem={this.renderItem}
            keyExtractor={this.extractKey}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            style={styles.contentContainer}
          />
        </FullScreenTemplate>
        <FixedCreatePlanButton onPress={this.navigateToCreatePlan} />
      </>
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

export default withNavigation(StudentPlanList);
