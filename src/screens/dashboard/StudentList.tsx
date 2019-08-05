import React from 'react';
import { FlatList } from 'react-native';
import { RNFirebase } from 'react-native-firebase';

import { Student } from 'models';
import { StudentListItem } from './StudentListItem';

interface State {
  students: Student[];
}

export class StudentList extends React.PureComponent<{}, State> {
  studentsRef: any;
  unsubscribeStudent: any;
  state = {
    students: [],
  };

  componentDidMount() {
    this.studentsRef = Student.getCollectionRef();
    this.unsubscribeStudent = this.studentsRef.onSnapshot(this.handleStudentsChange);
  }

  handleStudentsChange = (
    querySnapshot: RNFirebase.firestore.QuerySnapshot,
  ) => {
    const students: Student[] = querySnapshot.docs.map(doc =>
      Object.assign(new Student(), {
        id: doc.id,
        ...doc.data(),
      }),
    );
    this.setState({ students });
  };

  componentWillUnmount() {
    this.unsubscribeStudent();
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
