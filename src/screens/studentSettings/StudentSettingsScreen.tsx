import React from 'react';
import { Alert } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { NarrowScreenTemplate, StudentSettings } from 'components';
import { i18n } from 'locale';
import { AuthUser, ModelSubscriber, Student, StudentData } from 'models';

interface State {
  student: Student;
}

export class StudentSettingsScreen extends React.PureComponent<NavigationInjectedProps, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      student: props.navigation.getParam('student'),
    };
  }

  componentDidMount() {
    const student = this.props.navigation.getParam('student');
    this.studentSubscriber.subscribeElementUpdates(student, updatedStudent =>
      this.setState({ student: updatedStudent }),
    );
  }

  componentWillUnmount() {
    this.studentSubscriber.unsubscribeElementUpdates();
  }

  get screenName(): string {
    return i18n.t('studentSettings:settingsTitle', {
      studentName: this.props.navigation.getParam('student').name,
    });
  }

  removeStudent = () =>
    this.state.student.delete().then(async () => {
      await AuthUser.getAuthenticatedUser().setCurrentStudent('');
      this.props.navigation.goBack();
    });

  handleRemoveStudentPressed = () => {
    Alert.alert(
      i18n.t('studentSettings:deleteStudent'),
      i18n.t('studentSettings:deleteMessage'),
      [
        { text: i18n.t('studentSettings:cancel') },
        { text: i18n.t('studentSettings:delete'), onPress: this.removeStudent },
      ],
      { cancelable: false },
    );
  };

  updateStudent = (data: StudentData) => this.state.student.update(data);

  render() {
    const { student } = this.state;
    return (
      <NarrowScreenTemplate title={this.screenName} navigation={this.props.navigation}>
        <StudentSettings
          student={student}
          onStudentRemove={this.handleRemoveStudentPressed}
          onStudentUpdate={this.updateStudent}
        />
      </NarrowScreenTemplate>
    );
  }
}
