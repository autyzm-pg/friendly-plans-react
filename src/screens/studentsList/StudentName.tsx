import React, { SFC } from 'react';
import { StyleSheet } from 'react-native';

import { StyledText } from 'components';
import { Student } from 'models';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { dimensions, palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  student: Student;
}

const StudentName: SFC<Props> = ({ student, navigation }) => {
  const setCurrentStudent = () => {
    navigation.navigate('Dashboard', {
      student,
    });
  };

  return (
    <StyledText style={styles.studentName} onPress={setCurrentStudent}>
      {student.name}
    </StyledText>
  );
};

const styles = StyleSheet.create({
  studentName: {
    ...typography.subtitle,
    color: palette.textBody,
    marginTop: dimensions.spacingSmall,
    marginBottom: dimensions.spacingSmall,
  },
});

export default withNavigation(StudentName);
