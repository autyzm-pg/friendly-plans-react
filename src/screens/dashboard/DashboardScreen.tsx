import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { FullScreenTemplate } from 'components';
import { View } from 'react-native';
import { Sidebar } from './Sidebar';

export class DashboardScreen extends React.PureComponent<
  NavigationInjectedProps
> {
  render() {
    return (
      <View>
        <Sidebar />
        <FullScreenTemplate />
      </View>
    );
  }
}
