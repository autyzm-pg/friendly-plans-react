import React from 'react';
import { FlatList } from 'react-native';

import { Student } from 'models';
import {StudentRepository} from '../../models/repository/StudentRepository';
import { StudentListItem } from './StudentListItem';

interface State {
  students: Student[];
}

export class StudentList extends React.PureComponent<{}, State> {
  studentRepository: StudentRepository = new StudentRepository();
  state: State = {
    students: [],
  };

  componentDidMount() {
    this.studentRepository.subscribeCollectionUpdates(
      (students: Student[]) => this.setState({ students })
    );
  }

  componentWillUnmount() {
    this.studentRepository.unsubscribeCollectionUpdates();
  }

  extractKey = (student: Student) => student.id;

  renderItem = ({ item }: { item: Student }) => (
    <StudentListItem student={item} />
  );

  render() {
    return (
      <FlatList
        data={this.state.students}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}
