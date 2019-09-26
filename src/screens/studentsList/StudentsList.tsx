import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Separator, StyledText } from 'components';
import sortBy from 'lodash.sortby';
import { Student } from 'models';
import { dimensions, palette, typography } from 'styles';
import StudentName from './StudentName';

interface Props {
  students: Student[];
}

export const StudentsList: SFC<Props> = ({ students }) => {
  const renderLetterGroupLabel = (letter: string) => (
    <StyledText key={letter} style={styles.label}>
      {letter}
    </StyledText>
  );

  const sortedStudents = sortBy(students, (student: Student) => student.name);
  const studentsLetterGrouped = sortedStudents.reduce((grouped: { [key: string]: Element[] }, student: Student) => {
    const firstLetter = student.name.charAt(0).toLowerCase();
    const shouldRenderSeparator = !grouped[firstLetter] && !!Object.keys(grouped).length;

    const studentEntry = <StudentName student={student} key={student.id} />;

    grouped[firstLetter] = grouped[firstLetter]
      ? [...grouped[firstLetter], studentEntry]
      : [renderLetterGroupLabel(firstLetter), studentEntry];

    if (shouldRenderSeparator) {
      grouped[firstLetter].unshift(<Separator key={`spearator-${firstLetter}`} extraWide />);
    }

    return grouped;
  }, {});

  return <View>{Object.values(studentsLetterGrouped).flat()}</View>;
};

const styles = StyleSheet.create({
  label: {
    ...typography.overline,
    color: palette.textDisabled,
    textTransform: 'uppercase',
  },
  studentName: {
    ...typography.subtitle,
    color: palette.textBody,
    marginTop: dimensions.spacingSmall,
    marginBottom: dimensions.spacingSmall,
  },
});
