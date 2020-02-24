import React from 'react';
import { Alert, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import PlayButton, { Card, Emoji, Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { ModelSubscriber, Plan, Student } from 'models';
import { Route } from 'navigation';
import { dimensions, palette, typography } from 'styles';

interface Props extends NavigationInjectedProps {
  plan: Plan;
  student: Student;
}

interface State {
  student: Student;
  isSwipeableOpen: boolean;
}

export class StudentPlanListItem extends React.PureComponent<Props, State> {
  studentSubscriber: ModelSubscriber<Student> = new ModelSubscriber();

  state: State = {
    student: this.props.student,
    isSwipeableOpen: false,
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

  renderRightActions = () => {
    return <View style={styles.rightActions} />;
  };

  handleOpenSwipeable = () => this.setState({ isSwipeableOpen: true });

  handleCloseSwipeable = () => this.setState({ isSwipeableOpen: false });

  handlePressDelete = () =>
    Alert.alert(i18n.t('planList:deletePlan'), i18n.t('planList:deletePlanDescription'), [
      { text: i18n.t('common:cancel') },
      {
        text: i18n.t('common:confirm'),
        onPress: this.props.plan.delete,
      },
    ]);

  render() {
    const { emoji, name } = this.props.plan;
    const { isSwipeableOpen } = this.state;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={isSwipeableOpen ? this.handlePressDelete : this.navigateToUpdatePlan}
          underlayColor="transparent"
        >
          <Swipeable
            renderRightActions={this.renderRightActions}
            onSwipeableRightWillOpen={this.handleOpenSwipeable}
            onSwipeableWillClose={this.handleCloseSwipeable}
          >
            <Card style={[styles.card, isSwipeableOpen && styles.swipeableContainerOpen]}>
              <View style={styles.cardTextContainer}>
                {!isSwipeableOpen && <Emoji symbol={emoji} />}
                <StyledText style={styles.cardText}>{name}</StyledText>
              </View>
              {!isSwipeableOpen && <PlayButton plan={this.props.plan} size={50} />}
              {isSwipeableOpen && (
                <View style={styles.deleteContainer}>
                  <Icon name="delete" onPress={this.handlePressDelete} />
                </View>
              )}
            </Card>
          </Swipeable>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  swipeableContainerOpen: {
    paddingHorizontal: 0,
  },
  rightActions: {
    backgroundColor: palette.backgroundSurface,
    width: 20,
  },
  card: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: dimensions.spacingSmall,
    zIndex: 1,
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
  deleteContainer: {
    backgroundColor: palette.purpleLightGray,
    height: 72,
    width: '10%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
  },
});

export default withNavigation(StudentPlanListItem);
