import React from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FlatButton, NarrowScreenTemplate } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { Route } from 'navigation';
import { palette } from 'styles';
import { StudentPanel } from '../studentSettings/StudentPanel';

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

  handleChange = (name: string) => this.setState({ student: { ...this.state.student, name } });

  handleCreateStudent = () => {
    const { name } = this.state.student;

    Student.create(name).then(() =>
      this.props.navigation.navigate(Route.Dashboard, {
        student: this.state.student,
      }),
    );
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
