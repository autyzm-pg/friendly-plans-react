import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { PlanItemHeader } from "./PlanItemHeader";
import { PlanItemImagePicker } from './PlanItemImagePicker';
import { PlanItem } from "../../models";
import { PlanItemContent } from "./PlanItemContent";

interface State {
  source: any;
}

export class CreatePlanItemScreen extends React.PureComponent<
  NavigationInjectedProps, State
> {
  state = {
    source: null,
  };

  onImageChange = (source: any) => {
    this.setState({ source });
  };

  render() {
    const { source } = this.state;

    const plan = this.props.navigation.getParam('plan');
    const planItem = new PlanItem;
    return (
        <FullScreenTemplate padded darkBackground>
          <Card>
            <PlanItemHeader planItem={planItem} />
            <PlanItemImagePicker source={source} onChange={this.onImageChange} />
            <PlanItemContent planItem={planItem} />
          </Card>
        </FullScreenTemplate>
    );
  }
}
