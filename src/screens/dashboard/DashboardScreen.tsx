import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigationFocus } from 'react-navigation';

import { i18n } from 'locale';
import { AuthUser, ModelSubscriber, Student } from 'models';
import { Route } from 'navigation';
import { palette } from 'styles';
import StudentPlanList from '../studentPlanList/StudentPlanList';

interface Props extends NavigationInjectedProps {
  isFocused: boolean;
}

interface State {
  currentStudentId: string;
  students: Student[];
  isInitialized: boolean;
  nextRoute: any;
}

export class DashboardScreen extends React.PureComponent<Props, State> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };

  state = {
    currentStudentId: '',
    students: [],
    isInitialized: false,
    nextRoute: null,
  };

  userSubscriber: ModelSubscriber<AuthUser> = new ModelSubscriber();
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  componentDidMount() {
    this.userSubscriber.subscribeElementUpdates(AuthUser.getAuthenticatedUser(), async user => {
      const currentStudentId = await user.getCurrentStudent();
      this.setState({ currentStudentId });
    });

    this.studentSubscriber.subscribeCollectionUpdates(AuthUser.getAuthenticatedUser(), async (students: Student[]) => {
      this.setState({ students, isInitialized: true });
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    const { isFocused } = this.props;
    const { students, currentStudentId, isInitialized } = this.state;
    if (prevState.currentStudentId !== currentStudentId) {
      // handle active student change
      const currentStudent = students.find((student: Student) => student.id === currentStudentId);
      this.props.navigation.setParams({ student: currentStudent });
      if (!currentStudent && students.length) {
        this.setState({ nextRoute: [Route.StudentsList, { canNavigateBack: false }] });
      }
    }
    if (prevState.students !== students) {
      // Handle student settings change
      const currentStudent = students.find((student: Student) => student.id === currentStudentId);
      this.props.navigation.setParams({ student: currentStudent });
    }
    if (
      (isFocused && prevState.students.length !== students.length) ||
      (isFocused && isInitialized && !students.length)
    ) {
      if (students.length === 0) {
        // open StudentCreate screen when user has no students
        this.props.navigation.setParams({ student: null });
        this.props.navigation.navigate(Route.StudentCreate, { canNavigateBack: false });
      }
    }
    if (!prevProps.isFocused && isFocused && this.state.nextRoute) {
      // queue next route to ensure navigation happens in the right order
      // @ts-ignore
      this.props.navigation.navigate(...this.state.nextRoute);
      this.setState({ nextRoute: null });
    }
  }

  componentWillUnmount() {
    this.userSubscriber.unsubscribeElementUpdates();
    this.studentSubscriber.unsubscribeCollectionUpdates();
  }

  render() {
    const student = this.props.navigation.getParam('student');

    return <View style={styles.container}>{student && <StudentPlanList student={student} />}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: palette.backgroundSurface,
  },
});

export default withNavigationFocus(DashboardScreen);
