import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { NarrowScreenTemplate, StudentSettings } from 'components';
import { i18n } from 'locale';
import { AuthUser, Student, StudentData } from 'models';
import { Route } from 'navigation';

interface State {
  student: Student;
}

export class StudentCreateScreen extends React.PureComponent<NavigationInjectedProps, State> {
  state = {
    student: new Student(),
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPressAndroid);
  }

  handleBackButtonPressAndroid = () => {
    if (!this.props.navigation.isFocused()) {
      return false;
    }
    return !this.canNavigateBack;
  };

  createStudent = async (data: StudentData) => {
    this.props.navigation.navigate(Route.Dashboard);
    const student = await Student.create(data);
    await AuthUser.getAuthenticatedUser().setCurrentStudent(student.id);
  };

  get canNavigateBack(): boolean {
    return this.props.navigation.getParam('canNavigateBack') !== false;
  }

  render() {
    const { student } = this.state;
    return (
      <NarrowScreenTemplate
        canNavigateBack={this.canNavigateBack}
        title={i18n.t('studentSettings:createStudentTitle')}
        navigation={this.props.navigation}
      >
        <StudentSettings student={student} onStudentCreate={this.createStudent} />
      </NarrowScreenTemplate>
    );
  }
}
