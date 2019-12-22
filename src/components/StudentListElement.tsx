import React, { SFC } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { StyledText } from 'components';
import { AuthUser, Student } from 'models';
import { Route } from 'navigation';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { dimensions, palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  student: Student;
}

const StudentName: SFC<Props> = ({ student, navigation }) => {
  const setCurrentStudent = async () => {
    await AuthUser.getAuthenticatedUser().setCurrentStudent(student.id);
    navigation.navigate(Route.Dashboard, {
      student,
    });
  };

  return (
    <TouchableHighlight style={styles.touchable} underlayColor={palette.underlay} onPress={setCurrentStudent}>
      <StyledText style={styles.studentName}>{student.name}</StyledText>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: -dimensions.spacingBig,
    paddingHorizontal: dimensions.spacingBig,
  },
  studentName: {
    ...typography.subtitle,
    color: palette.textBody,
    marginTop: dimensions.spacingSmall,
    marginBottom: dimensions.spacingSmall,
  },
});

export const StudentListElement = withNavigation(StudentName);
