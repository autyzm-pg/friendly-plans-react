import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FlatButton, NarrowScreenTemplate, Separator, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Student } from 'models';
import { dimensions, palette, typography } from 'styles';
import { AlarmSoundSettings } from './AlarmSoundSettings';
import { PlanDisplayPreview } from './PlanDisplayPreview';
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

  handleChange = (name: string) => this.setState({ student: { ...this.state.student, name } });

  handleEndEditing = () => {
    const { student } = this.state;

    if (!student.name) {
      return;
    }

    this.state.student.update({ name: student.name });
  };

  handleRemoveStudent = async () => {
    await this.state.student.delete();
    this.props.navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { student } = this.state;

    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation}>
        <StyledText style={styles.label}>{i18n.t('studentSettings:studentName')}</StyledText>
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t('studentSettings:studentNamePlaceholder')}
          value={student.name}
          onChangeText={this.handleChange}
          onEndEditing={this.handleEndEditing}
        />
        <Separator extraWide />
        <StyledText style={[styles.label, styles.taskViewLabel]}>{i18n.t('studentSettings:taskView')}</StyledText>
        <PlanDisplayPreview
          displaySettings={student.displaySettings}
          textSize={student.textSize}
          isUpperCase={student.isUpperCase}
        />
        <View style={styles.slidersContainer}>
          <StudentDisplaySettings student={student} />
          <StudentTextSizeSettings student={student} />
        </View>
        <StudentTextCaseSettings student={student} />
        <SlideCardSwitch student={student} />
        <Separator extraWide />
        <StyledText style={[styles.label, styles.taskViewLabel]}>{i18n.t('studentSettings:soundSettings')}</StyledText>
        <AlarmSoundSettings value={'Beep'} />
        <Separator extraWide />
        <View>
          <FlatButton
            title={i18n.t('studentSettings:removeStudent')}
            titleStyle={styles.removeStudentButton}
            onPress={this.handleRemoveStudent}
          />
        </View>
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
    marginVertical: dimensions.spacingSmall,
  },
  slidersContainer: {
    paddingHorizontal: dimensions.spacingBig,
  },
  textInput: {
    marginTop: dimensions.spacingSmall,
    marginBottom: dimensions.spacingBig,
  },
  removeStudentButton: {
    color: palette.textBody,
  },
});
