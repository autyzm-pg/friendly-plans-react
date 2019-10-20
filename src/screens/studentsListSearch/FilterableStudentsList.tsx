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
    .sort((student1: Student, student2: Student) => {
      if (student1.name < student2.name) {
        return -1;
      }
      if (student1.name > student2.name) {
        return 1;
      }
      return 0;
    });

  return (
    <View>
      {filteredStudents.map(student => (
        <StudentListElement student={student} key={student.id} />
      ))}
    </View>
  );
};
