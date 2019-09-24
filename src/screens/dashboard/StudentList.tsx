import React from 'react';
import { FlatList } from 'react-native';

import { AuthUser, ModelSubscriber, Student } from 'models';
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
    this.modelSubscriber.subscribeCollectionUpdates(AuthUser.getAuthenticatedUser(), (students: Student[]) =>
      this.setState({ students }),
    );
  }

  componentWillUnmount() {
    this.modelSubscriber.unsubscribeCollectionUpdates();
  }

  extractKey = (student: Student) => student.id;

  renderItem = ({ item }: { item: Student }) => <StudentListItem student={item} />;

  render() {
    return <FlatList data={this.state.students} renderItem={this.renderItem} keyExtractor={this.extractKey} />;
  }
}
