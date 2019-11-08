import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { IconButton, NarrowScreenTemplate } from 'components';
import { i18n } from 'locale';
import { AuthUser, ModelSubscriber, Student } from 'models';
import { dimensions, palette } from 'styles';
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

  navigateToStudentsSearch = () => {
    this.props.navigation.navigate('StudentsListSearch', {
      students: this.state.students,
    });
  };

  get screenName(): string {
    return i18n.t('studentsList:screenTitle');
  }

  handleNavigateToCreateStudent = () => {
    this.props.navigation.navigate('StudentSettings', {
      createStudent: true,
    });
  };

  renderHeaderButtons() {
    return (
      <>
        <IconButton
          containerStyle={styles.iconContainer}
          name="person-add"
          type="material"
          size={24}
          color={palette.textWhite}
          onPress={this.handleNavigateToCreateStudent}
        />
        <IconButton
          containerStyle={styles.iconContainer}
          name="search"
          type="material"
          size={24}
          color={palette.textWhite}
          onPress={this.navigateToStudentsSearch}
        />
      </>
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

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: dimensions.spacingSmall,
  },
});
