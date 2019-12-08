import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import PlayButton, { Card, Emoji, StyledText } from 'components';
import { ModelSubscriber, Plan, Student } from 'models';
import { Route } from 'navigation';
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
    const { student, plan } = this.props;

    this.props.navigation.navigate(Route.PlanActivity, {
      student,
      plan,
    });
  };

  render() {
    const { emoji, name } = this.props.plan;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navigateToUpdatePlan} underlayColor="transparent">
          <Card style={styles.card}>
            <View style={styles.cardTextContainer}>
              <Emoji symbol={emoji} />
              <StyledText style={styles.cardText}>{name}</StyledText>
            </View>
            <PlayButton plan={this.props.plan} size={50} />
          </Card>
        </TouchableHighlight>
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
    ...typography.subtitle,
    color: palette.textBody,
    marginLeft: dimensions.spacingBig,
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default withNavigation(StudentPlanListItem);
