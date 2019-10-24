import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FlatButton, StyledText } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, PlanItem, Student } from 'models';
import { palette, typography } from 'styles';
import { PlanSlideItem } from './PlanSlideItem';

interface State {
  planItems: PlanItem[];
  pageNumber: number;
  student: Student;
}

export class RunPlanSlideScreen extends React.PureComponent<NavigationInjectedProps, State> {
  static navigationOptions = {
    header: null,
  };

  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();
  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();
  state: Readonly<State> = {
    planItems: [],
    pageNumber: 0,
    student: this.props.navigation.getParam('student'),
  };

  componentDidMount() {
    const student = this.props.navigation.getParam('student');
    const plan = this.props.navigation.getParam('plan');

    this.planItemsSubscriber.subscribeCollectionUpdates(plan, planItems => this.setState({ planItems }));
    this.studentSubscriber.subscribeElementUpdates(student, updatedStudent =>
      this.setState({ student: updatedStudent }),
    );
  }

  componentWillUnmount() {
    this.planItemsSubscriber.unsubscribeCollectionUpdates();
    this.studentSubscriber.unsubscribeElementUpdates();
  }

  nextPage = () => {
    if (this.state.pageNumber + 1 < this.state.planItems.length) {
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    } else {
      this.props.navigation.navigate('Dashboard');
    }
  };

  renderPlan = () => {
    const { student } = this.state;
    return (
      <View style={styles.container}>
        <Card style={styles.slide}>
          <View style={styles.planItem}>
            <PlanSlideItem
              type={student.displaySettings}
              planItem={this.state.planItems[this.state.pageNumber]}
              index={this.state.pageNumber}
              textSize={this.state.student.textSize}
              isUpperCase={this.state.student.isUpperCase}
            />
          </View>
          <FlatButton style={styles.button} onPress={this.nextPage} title={i18n.t('runPlan:next')} />
        </Card>
      </View>
    );
  };

  renderLoader = () => {
    return <StyledText>{i18n.t('runPlan:wait')}</StyledText>;
  };

  render() {
    return this.state.planItems.length ? this.renderPlan() : this.renderLoader();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.backgroundSurface,
  },
  slide: {
    flex: 1,
    backgroundColor: palette.background,
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: palette.primaryVariant,
  },
  buttonText: {
    color: palette.textWhite,
    margin: 10,
  },
  planItem: {
    flex: 1,
    alignItems: 'center',
    color: palette.textBlack,
    ...typography.title,
  },
});
