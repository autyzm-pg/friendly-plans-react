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
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

  return (
    <View>
      {filteredStudents.map(student => (
        <StudentListElement student={student} key={student.id} />
      ))}
    </View>
  );
};
