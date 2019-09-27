import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { i18n } from 'locale';
import { AuthUser, ModelSubscriber, Student } from 'models';
import { palette } from 'styles';
import { StudentPlanList } from '../studentPlanList/StudentPlanList';
import { CreateButton } from './CreateButton';

export class DashboardScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: i18n.t('planList:viewTitle'),
  };
  modelSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  componentDidMount() {
    this.modelSubscriber.subscribeCollectionUpdates(AuthUser.getAuthenticatedUser(), (students: Student[]) => {
      this.props.navigation.setParams({ student: students[0] });
    });
  }

  componentWillUnmount() {
    this.modelSubscriber.unsubscribeCollectionUpdates();
  }

  navigateToCreatePlan() {
    const student = this.props.navigation.getParam('student');

    this.props.navigation.navigate('PlanActivity', {
      student,
    });
  }

  render() {
    const student = this.props.navigation.getParam('student');

    return (
      <View style={styles.container}>
        <FullScreenTemplate padded darkBackground>
          {student && <StudentPlanList student={student} />}
        </FullScreenTemplate>
        {student && <CreateButton actionName="create student" onPress={Student.create} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: palette.backgroundTinted,
  },
});
