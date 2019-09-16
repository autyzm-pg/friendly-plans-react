import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';

export class UpdatePlanSubItemScreen extends React.PureComponent<NavigationInjectedProps> {
  render() {
    return <FullScreenTemplate padded darkBackground />;
  }
}
