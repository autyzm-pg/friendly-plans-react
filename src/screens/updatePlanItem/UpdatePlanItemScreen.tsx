import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { PlanItem, PlanItemType } from '../../models';
import { ModelSubscriber } from '../../models/ModelSubscriber';
import { PlanItemHeader } from './PlanItemHeader';
import { PlanItemImagePicker } from './PlanItemImagePicker';
import { PlanItemLector } from './PlanItemLector';
import { PlanItemTaskComplexitySwitch } from './PlanItemTaskComplexitySwitch';
import { PlanItemTimer } from './PlanItemTimer';
import { PlanSubItemsListColumn } from './PlanSubItemsListColumn';

interface State {
  planItem: PlanItem;
}

export class UpdatePlanItemScreen extends React.PureComponent<NavigationInjectedProps, State> {
  planItemsSubscriber: ModelSubscriber<PlanItem> = new ModelSubscriber();

  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      planItem: this.props.navigation.getParam('planItem'),
    };
  }

  componentDidMount() {
    const planItem = this.props.navigation.getParam('planItem');
    this.planItemsSubscriber.subscribeElementUpdates(planItem, updatedPlanItem =>
      this.setState({ planItem: updatedPlanItem }),
    );
  }

  componentWillUnmount() {
    this.planItemsSubscriber.unsubscribeElementUpdates();
  }

  onImageChange = (image: any) => {
    this.state.planItem.update({ image: image.data });
  };

  onLectorChange = (lector: boolean) => {
    this.state.planItem.update({ lector });
  };

  onComplexitySwitch(planItemType: PlanItemType): void {
    const planItem: PlanItem = this.props.navigation.getParam('planItem');
    planItem.update({
      type: planItemType,
    });
  }

  render() {
    const { planItem } = this.state;
    const planItemTaskComplexitySwitch = (
      <PlanItemTaskComplexitySwitch planItemType={planItem.type} onComplexitySwitch={this.onComplexitySwitch} />
    );

    return (
      <FullScreenTemplate padded darkBackground>
        <Card>
          <PlanItemHeader planItem={planItem} />
          <View style={styles.mainContainer}>
            {planItem.type === PlanItemType.ComplexTask ? <PlanSubItemsListColumn planItem={planItem} /> : <View />}

            <View style={styles.itemDetailsContainer}>
              <View style={styles.leftColumn}>
                <PlanItemImagePicker imageBase64Data={planItem.image} onChange={this.onImageChange} />
              </View>
              <View style={styles.rightColumn}>
                {planItem.isTask() ? planItemTaskComplexitySwitch : <View />}
                <PlanItemTimer planItem={planItem} />
                <PlanItemLector planItem={planItem} onChange={this.onLectorChange} />
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
    backgroundColor: 'blue',
  },
});
