import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { Card, Emoji, IconButton, StyledText } from 'components';
import { ModelSubscriber, Plan, Student, StudentDisplayOption } from 'models';
import { dimensions, palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  plan: Plan;
  student: Student;
}

interface State {
  student: Student;
}

export class StudentPlanListItem extends React.PureComponent<Props, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  state: Readonly<State> = {
    student: this.props.student,
  };

  componentDidMount() {
    this.studentSubscriber.subscribeElementUpdates(this.props.student, student => this.setState({ student }));
  }

  componentWillUnmount() {
    this.studentSubscriber.unsubscribeElementUpdates();
  }

  navigateToUpdatePlan = () => {
    this.props.navigation.navigate('UpdatePlan', {
      plan: this.props.plan,
      student: this.props.student,
    });
  };

  navigateToRunPlan = () => {
    switch (this.state.student.displaySettings) {
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
        <Card style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Emoji symbol="🎸" />
            <StyledText style={styles.cardText}>{name}</StyledText>
          </View>
          <IconButton name="play-circle" color={palette.secondary} size={50} onPress={this.navigateToRunPlan} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: dimensions.spacingSmall,
  },
  cardText: {
    ...typography.subtitle1,
    color: palette.primaryVariant,
    marginLeft: dimensions.spacingBig,
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default withNavigation(StudentPlanListItem);
