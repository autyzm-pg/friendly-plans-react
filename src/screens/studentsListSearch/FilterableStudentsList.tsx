import { StudentListElement } from 'components';
import { Student } from 'models';
import React, { SFC } from 'react';
import { View } from 'react-native';

interface Props {
  students: Student[];
  searchQuery: string;
}

export const FilterableStudentsList: SFC<Props> = ({ students, searchQuery }) => {
  const filteredStudents: Student[] = students
    .filter(student => student.name.match(new RegExp(searchQuery, 'i')))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View>
      {filteredStudents.map(student => (
        <StudentListElement student={student} key={student.id} />
      ))}
    </View>
  );
};
