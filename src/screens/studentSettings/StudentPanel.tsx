import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Separator, StyledText, TextInput } from 'components';
import { i18n } from 'locale';
import { Student } from 'models';
import { dimensions, palette, typography } from 'styles';
import { AlarmSoundSettings } from './AlarmSoundSettings';
import { PlanDisplayPreview } from './PlanDisplayPreview';
import { SlideCardSwitch } from './SlideCardSwitch';
import { StudentDisplaySettings } from './StudentDisplaySettings';
import { StudentTextCaseSettings } from './StudentTextCaseSettings';
import { StudentTextSizeSettings } from './StudentTextSizeSettings';

interface Props {
  student: Student;
  handleChangeName: (name: string) => void;
  handleEndEditingName?: () => void;
}

export const StudentPanel: SFC<Props> = ({ student, handleChangeName, handleEndEditingName, children }) => (
  <>
    <StyledText style={styles.label}>{i18n.t('studentSettings:studentName')}</StyledText>
    <TextInput
      style={styles.textInput}
      placeholder={i18n.t('studentSettings:studentNamePlaceholder')}
      value={student.name}
      onChangeText={handleChangeName}
      onEndEditing={handleEndEditingName}
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
    {children}
  </>
);

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
});
