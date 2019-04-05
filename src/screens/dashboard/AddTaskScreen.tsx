import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';

export class AddTaskScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  render() {
    return <FullScreenTemplate />;
  }
}
