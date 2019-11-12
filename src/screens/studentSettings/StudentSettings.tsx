import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { FlatButton, NarrowScreenTemplate } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Student } from 'models';
import { palette } from 'styles';
import { StudentPanel } from './StudentPanel';

interface State {
  student: Student;
}

class StudentSettings extends React.PureComponent<NavigationInjectedProps, State> {
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

  handleChange = (name: string) => this.setState({ student: { ...this.state.student, name } });

  handleEndEditing = () => {
    const { student } = this.state;

    if (!student.name) {
      return;
    }

    this.state.student.update({ name: student.name });
  };

  handleRemoveStudent = () => this.state.student.delete().then(() => this.props.navigation.goBack());

  render() {
    const { student } = this.state;

    return (
      <NarrowScreenTemplate title={this.screenName} navigation={this.props.navigation}>
        <StudentPanel
          student={student}
          handleChangeName={this.handleChange}
          handleEndEditingName={this.handleEndEditing}
        >
          <View>
            <FlatButton
              title={i18n.t('studentSettings:removeStudent')}
              titleStyle={styles.studentButton}
              onPress={this.handleRemoveStudent}
            />
          </View>
        </StudentPanel>
      </NarrowScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  studentButton: {
    color: palette.textBody,
  },
});

export default withNavigation(StudentSettings);
