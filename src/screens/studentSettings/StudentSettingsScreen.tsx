import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { NarrowScreenTemplate, Separator, StyledText, TextInput } from 'components';
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
  editModeOn: boolean;
}

export class StudentSettingsScreen extends React.PureComponent<NavigationInjectedProps, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      student: props.navigation.getParam('student'),
      editModeOn: false,
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

  toggleEditMode = () => {
    this.setState({
      editModeOn: !this.state.editModeOn,
    });
  };

  handleChange = (name: string) => {
    this.state.student.update({ name });
  };

  render() {
    const { navigation } = this.props;
    const { student, editModeOn } = this.state;

    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation}>
        <StyledText style={styles.label}>{i18n.t('studentSettings:studentName')}</StyledText>
        {!editModeOn && (
          <StyledText style={styles.studentName} onPress={this.toggleEditMode}>
            {student.name}
          </StyledText>
        )}
        {editModeOn && (
          <TextInput
            autoFocus
            style={styles.textInput}
            placeholder={i18n.t('studentSettings:studentNamePlaceholder')}
            value={student.name}
            onChangeText={this.handleChange}
            onEndEditing={this.toggleEditMode}
          />
        )}
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
  studentName: {
    ...typography.subtitle,
    color: palette.textBody,
    marginTop: dimensions.spacingMedium,
    marginBottom: dimensions.spacingBig,
  },
  slidersContainer: {
    paddingHorizontal: dimensions.spacingBig,
  },
  textInput: {
    marginTop: dimensions.spacingMedium,
    marginBottom: dimensions.spacingHuge,
  },
});
