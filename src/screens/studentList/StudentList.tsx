import React from 'react';
import {FlatList, View} from 'react-native';

import {AuthUser, Student} from 'models';
import { StyledText } from '../../components';
import {ModelSubscriber} from '../../models/ModelSubscriber';
import { StudentListItem } from './StudentListItem';

interface State {
  students: Student[];
}

export class StudentList extends React.PureComponent<{}, State> {
  modelSubscriber: ModelSubscriber<Student> = new ModelSubscriber();
  state: State = {
    students: [],
  };

  componentDidMount() {
    this.modelSubscriber.subscribeCollectionUpdates(
      AuthUser.getAuthenticatedUser(), (students: Student[]) => this.setState({ students })
    );
  }

  componentWillUnmount() {
    this.modelSubscriber.unsubscribeCollectionUpdates();
  }

  extractKey = (student: Student) => student.id;

  renderItem = ({ item }: { item: Student }) => (
    <StudentListItem student={item} />
  );

  compareStudentNames(studentA: Student, studentB: Student) {
    if (studentA.name.toLowerCase() > studentB.name.toLowerCase()) {
      return 1;
    } else if (studentA.name.toLowerCase() < studentB.name.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  groupAndSortStudents(): { [id: string] : Student[]; } {
    const studentsSortedAndGrouped = {};
    this.state.students.forEach((student) => {
      const index = student.name[0].toLowerCase();
      if (!(index in studentsSortedAndGrouped)) { studentsSortedAndGrouped[index] = []; }
      studentsSortedAndGrouped[index].push(student);
    });
    for (const index in studentsSortedAndGrouped) {
      if (studentsSortedAndGrouped.hasOwnProperty(index)) {
        studentsSortedAndGrouped[index].sort(this.compareStudentNames);
      }
    }
    return studentsSortedAndGrouped;
  }

  render() {
    const studentsSortedAndGrouped = this.groupAndSortStudents();
    const items: Element[] = [];

    const firstLettersOfNames = Object.keys(studentsSortedAndGrouped);
    firstLettersOfNames.sort();
    firstLettersOfNames.forEach((index) => {
      items.push(
        <View key={index} >
          <StyledText>{index.toUpperCase()}</StyledText>
          <FlatList
            data={studentsSortedAndGrouped[index]}
            renderItem={this.renderItem}
            keyExtractor={this.extractKey}
          />
        </View>
      );
    });
    return (
      <View>
        {items}
      </View>
    );
  }
}
