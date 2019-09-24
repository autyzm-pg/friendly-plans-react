import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { IconButton, NarrowScreenTemplate, Separator, StyledText } from 'components';
import { i18n } from 'locale';
import { AuthUser, ModelSubscriber, Student } from 'models';
import { palette, typography } from 'styles';
import { StudentsList } from './StudentsList';

interface State {
  students: Student[];
}

export class StudentsListScreen extends React.PureComponent<NavigationInjectedProps, State> {
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

  get screenName(): string {
    return i18n.t('studentsList:screenTitle');
  }

  renderHeaderButtons() {
    return (
      <IconButton name="person-add" type="material" size={30} color={palette.textWhite} onPress={Student.create} />
    );
  }

  render() {
    const { navigation } = this.props;
    const { students } = this.state;
    return (
      <NarrowScreenTemplate title={this.screenName} navigation={navigation} buttons={this.renderHeaderButtons()}>
        <StudentsList students={students} />
      </NarrowScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({});
