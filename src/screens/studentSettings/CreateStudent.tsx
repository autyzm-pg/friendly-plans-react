import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { FlatButton, NarrowScreenTemplate } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { Route } from 'navigation';
import { palette } from 'styles';
import { StudentPanel } from './StudentPanel';

interface State {
  student: Student;
}

class CreateStudent extends React.PureComponent<NavigationInjectedProps, State> {
  state = {
    student: new Student(),
  };

  handleChange = (name: string) => this.setState({ student: { ...this.state.student, name } });

  handleCreateStudent = () => {
    const { name } = this.state.student;

    Student.create(name).then(() =>
      this.props.navigation.navigate(Route.Dashboard, {
        student: this.state.student,
      }),
    );
  };

  render() {
    const { student } = this.state;

    return (
      <NarrowScreenTemplate title={i18n.t('studentSettings:createStudentTitle')} navigation={this.props.navigation}>
        <StudentPanel student={student} handleChangeName={this.handleChange}>
          <View>
            <FlatButton
              title={i18n.t('studentSettings:createStudent')}
              titleStyle={styles.studentButton}
              onPress={this.handleCreateStudent}
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

export default withNavigation(CreateStudent);
