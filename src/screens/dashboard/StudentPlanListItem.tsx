import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNFirebase } from 'react-native-firebase';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { IconButton, StyledText } from 'components';
import { Plan, Student, StudentDisplayOption } from 'models';
import { palette } from 'styles';

interface Props extends NavigationInjectedProps {
  plan: Plan;
  student: Student;
}

interface State {
  student: Student;
}

export class StudentPlanListItem extends React.PureComponent<Props, State> {
  studentRef: any;
  unsubscribeStudent: any;

  state: Readonly<State> = {
    student: this.props.student,
  };

  componentDidMount() {
    this.studentRef = this.state.student.getStudentRef();
    this.unsubscribeStudent = this.studentRef.onSnapshot(this.handleStudentChange);
  }

  handleStudentChange = (documentSnapshot: RNFirebase.firestore.DocumentSnapshot) => {
    if(documentSnapshot.exists){
      const student = Object.assign(new Student(), {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
      this.setState({ student });
    }
  };

  componentWillUnmount() {
    this.unsubscribeStudent();
  }

  navigateToUpdatePlan = () => {
    this.props.navigation.navigate('UpdatePlan', {
      plan: this.props.plan,
      student: this.props.student,
    });
  };
  
  navigateToRunPlan = () => {
    switch(this.state.student.displaySettings) {
      case StudentDisplayOption.LargeImageSlide:
      case StudentDisplayOption.ImageWithTextSlide:
      case StudentDisplayOption.TextSlide:
        this.props.navigation.navigate('RunPlanSlide', {
          plan: this.props.plan,
          student: this.state.student,
        });
        break;
      default:
        this.props.navigation.navigate('RunPlanList', {
          itemParent: this.props.plan,
          student: this.state.student,
        });
    }
  };

  render() {
    const { name } = this.props.plan;
    return (
      <View style={styles.container}>
        <StyledText>{name}</StyledText>
        <View style={styles.iconContainer}>
          <IconButton
            name="pencil"
            color={palette.accent}
            size={28}
            containerStyle={styles.updateIcon}
            onPress={this.navigateToUpdatePlan}
          />
          <IconButton name="play-circle" size={30} onPress={this.navigateToRunPlan} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  updateIcon: {
    marginEnd: 12,
  },
  container: {
    width: '50%',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.backgroundDark,
    marginBottom: 16,
    marginEnd: 16,
    borderRadius: 12,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default withNavigation(StudentPlanListItem);
