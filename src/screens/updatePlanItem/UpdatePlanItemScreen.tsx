import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';

import {Card, FullScreenTemplate} from 'components';
import {RNFirebase} from 'react-native-firebase';
import {PlanItem, PlanItemType} from '../../models';
import {PlanItemHeader} from './PlanItemHeader';
import {PlanItemImagePicker} from './PlanItemImagePicker';
import {PlanItemLector} from './PlanItemLector';
import {PlanItemTaskComplexitySwitch} from './PlanItemTaskComplexitySwitch';
import {PlanItemTimer} from './PlanItemTimer';
import {PlanSubItemsListColumn} from './PlanSubItemsListColumn';

interface State {
  source: any;
  planItem: PlanItem;
}

export class UpdatePlanItemScreen extends React.PureComponent<NavigationInjectedProps, State> {
  unsubscribePlanItem: any;

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      source: null,
      planItem: this.props.navigation.getParam('planItem')
    };
  }

  componentDidMount() {
    const planItemRef = this.state.planItem.getPlanItemRef();
    this.unsubscribePlanItem = planItemRef.onSnapshot(this.handlePlanItemChange);
  }

  handlePlanItemChange = (documentSnapshot: RNFirebase.firestore.DocumentSnapshot) => {
    if (documentSnapshot.exists) {
      const planItem = Object.assign(new PlanItem(), {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
      this.setState({ planItem });
    }
  };

  componentWillUnmount() {
    this.unsubscribePlanItem();
  }

  onImageChange = (source: any) => {
    this.setState({ source });
  };

  onComplexitySwitch(planItemType: PlanItemType): void {
    const planItem: PlanItem = this.props.navigation.getParam('planItem');
    planItem.update({
        type: planItemType
    });
  }

  render() {
    const { source, planItem } = this.state;
    const planItemTaskComplexitySwitch = (
        <PlanItemTaskComplexitySwitch
          planItemType={planItem.type}
          onComplexitySwitch={(planItemType) => this.onComplexitySwitch(planItemType)}
        />
    );

    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanItemHeader planItem={planItem} />
          <View style={styles.mainContainer}>

              {planItem.type === PlanItemType.ComplexTask ? <PlanSubItemsListColumn planItem={planItem} /> : <View/>}

            <View style={styles.itemDetailsContainer}>
              <View style={styles.leftColumn}>
                <PlanItemImagePicker
                  source={source}
                  onChange={this.onImageChange}
                />
              </View>
              <View style={styles.rightColumn}>
                  {planItem.isTask() ? planItemTaskComplexitySwitch : <View/>}
                <PlanItemTimer planItem={planItem} />
                <PlanItemLector planItem={planItem} />
              </View>
            </View>
          </View>
        </Card>
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
   itemDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftColumn: {
    flexGrow: 1,
  },
  rightColumn: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  buttonCard: {
    flexDirection: 'row',
      backgroundColor: 'blue'
  },
});
