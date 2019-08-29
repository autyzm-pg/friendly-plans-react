import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNFirebase } from 'react-native-firebase';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FlatButton, StyledText } from 'components';
import { i18n } from 'locale';
import { PlanItem, Student } from 'models';
import { palette, typography } from 'styles';
import { PlanSlideItem } from './PlanSlideItem';
import {StudentRepository} from '../../../models/repository/StudentRepository';

interface State {
  planItems: PlanItem[];
  pageNumber: number;
  student: Student;
}

export class RunPlanSlideScreen extends React.PureComponent<
  NavigationInjectedProps, State> {
    static navigationOptions = {
      header: null,
    };

    studentRepository: StudentRepository = new StudentRepository();
    planItemsRef: any;
    unsubscribePlanItems: any;
    state: Readonly<State> = {
      planItems: [],
      pageNumber: 0,
      student: this.props.navigation.getParam('student'),
    };

    componentDidMount() {
      const student = this.props.navigation.getParam('student');
      const plan = this.props.navigation.getParam('plan');
      this.planItemsRef = plan.getPlanItemsRef();
      this.unsubscribePlanItems = this.planItemsRef.onSnapshot(this.handlePlanItemsChange);

      this.studentRepository.subscribeObjectUpdates(
        student, (updatedStudent) => this.setState({student: updatedStudent })
      );
    }
  
    handlePlanItemsChange = (
      querySnapshot: RNFirebase.firestore.QuerySnapshot,
    ) => {
      const planItems: PlanItem[] = querySnapshot.docs.map(doc =>
        Object.assign(new PlanItem(), {
          id: doc.id,
          ...doc.data(),
        }),
      );
      this.setState({ planItems });
    };
  
    componentWillUnmount() {
      this.unsubscribePlanItems();
      this.studentRepository.unsubscribeObjectUpdates();
    }
  
    nextPage = () => {
      if (this.state.pageNumber + 1 < this.state.planItems.length) {
          this.setState(state => ({pageNumber: state.pageNumber + 1}));
      }
    };

    renderPlan = () => {
      return (
        <View style={styles.container}>
          <Card style={styles.slide} >
            <View style={styles.planItem}>
              <PlanSlideItem
                planItem={this.state.planItems[this.state.pageNumber]}
                index={this.state.pageNumber}
                textSize={this.state.student.textSize}
                textCase={this.state.student.textCase}
              />
            </View>
            <FlatButton
              style={styles.button}
              onPress={this.nextPage}
              title={i18n.t('runPlan:next')} />   
          </Card>
        </View>
      );
    };

    renderLoader = () => {
      return (
        <StyledText>{i18n.t('runPlan:wait')}</StyledText>
      );
    };

    render() {
      return (
        this.state.planItems.length
        ? this.renderPlan()
        : this.renderLoader()
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
  slide: {
    flex: 1,
    backgroundColor: palette.background,
    margin:20,
  },
  buttonContainer: {
    flex:1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: palette.primaryDark,
  },
  buttonText: {
    color: palette.textWhite,
    margin: 10,
  },
  planItem: {
    flex: 1,
    alignItems: 'center',
    color: palette.textBlack,
    ...typography.headline5,
  },
});
