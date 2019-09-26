import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { NarrowScreenTemplate, Separator, StyledText } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Student } from 'models';
import { palette, typography } from 'styles';
import { SlideCardSwitch } from './SlideCardSwitch';
import { StudentDisplaySettings } from './StudentDisplaySettings';
import { StudentTextCaseSettings } from './StudentTextCaseSettings';
import { StudentTextSizeSettings } from './StudentTextSizeSettings';

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
    return i18n.t('studentSettings:screenTitle', {
      studentName: this.props.navigation.getParam('student').name,
    });
  }

  render() {
    const { navigation } = this.props;
    const { student } = this.state;
    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation}>
        <StyledText style={styles.label}>{i18n.t('studentSettings:studentName')}</StyledText>
        <StyledText style={styles.studentName}>{student.name}</StyledText>
        <Separator extraWide />
        <StyledText style={[styles.label, styles.taskViewLabel]}>{i18n.t('studentSettings:taskView')}</StyledText>
        <StudentDisplaySettings student={student} />
        <StudentTextSizeSettings student={student} />
        <StudentTextCaseSettings student={student} />
        <SlideCardSwitch student={student} />
      </NarrowScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    ...typography.overline,
    color: palette.textDisabled,
  },
  taskViewLabel: {
    marginVertical: 20,
  },
  studentName: {
    ...typography.subtitle,
    color: palette.textBlack,
    marginTop: 16,
    marginBottom: 24,
  },
});
