import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Card, FullScreenTemplate } from 'components';
import { PlanItemHeader } from "./PlanItemHeader";
import { PlanItemImagePicker } from "./PlanItemImagePicker";
import { PlanItem } from "../../models";

export class CreatePlanItemScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  render() {
    const plan = this.props.navigation.getParam('plan');
    const planItem = new PlanItem;
    return (
        <FullScreenTemplate padded darkBackground>
          <Card>
            <PlanItemHeader planItem={planItem} />
            <PlanItemImagePicker />
          </Card>
        </FullScreenTemplate>
    );
  }
}
