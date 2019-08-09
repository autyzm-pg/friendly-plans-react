import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { RNFirebase } from 'react-native-firebase';

import { StyledText, Card, FlatButton } from 'components';
import { palette, typography } from 'styles';
import { Student, PlanItem } from 'models'
import { PlanSlideItem } from './PlanSlideItem';

interface State {
  planItems: PlanItem[];
  pageNumber: number;
  student: Student;
}

export class RunPlanSlideScreen extends React.PureComponent<
  NavigationInjectedProps> {
    planItemsRef: any;
    unsubscribePlanItems: any;
    studentRef: any;
    unsubscribeStudent: any;
    static navigationOptions = {
      header: null,
    };
    state = {
      planItems: [],
      pageNumber: 0,
      student: this.props.navigation.getParam('student'),
    };

    componentDidMount() {
      const plan = this.props.navigation.getParam('plan');
      this.planItemsRef = plan.getPlanItemsRef();
      this.unsubscribePlanItems = this.planItemsRef.onSnapshot(this.handlePlanItemsChange);
      this.studentRef = this.state.student.getStudentRef();
      this.unsubscribeStudent = this.studentRef.onSnapshot(this.handleStudentChange);
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
  
    handleStudentChange = (documentSnapshot: RNFirebase.firestore.DocumentSnapshot) => {
      if(documentSnapshot.exists){
        const student = Object.assign(new Student(), {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
        this.setState({ student });
      }
    }
  
    componentWillUnmount() {
      this.unsubscribePlanItems();
      this.unsubscribeStudent();
    }
  
    nextPage = () => {
      if(this.state.pageNumber + 1 < this.state.planItems.length)
        this.setState({ pageNumber: this.state.pageNumber + 1 });
    }

    render() {
      return (
        this.state.planItems.length
        ? <View style={styles.container}>
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
                title={"Next page"} />   
            </Card>
          </View>
        : <StyledText>Wait</StyledText>
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
