import React, { PureComponent } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Platform, StatusBar } from 'react-native';
import {
  createAppContainer,
  NavigationContainerComponent,
  SafeAreaView,
} from 'react-navigation';

import { i18n } from 'locale';
import {
  AnalyticsService,
  NavigationService,
  PushNotificationsService,
} from 'services';
import { RootStackNavigator } from './navigators/RootStackNavigator';

PushNotificationsService.initialize();

// Set status bar height on Android to support windowTranslucentStatus style
/* istanbul ignore next */
if (Platform.OS === 'android') {
  // @ts-ignore
  SafeAreaView.setStatusBarHeight(StatusBar.currentHeight);
}

const AppContainer = createAppContainer(RootStackNavigator);

export default class App extends PureComponent {
  setNavigationRef = (ref: NavigationContainerComponent) => {
    NavigationService.setTopLevelNavigator(ref);
  };

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent />
        <AppContainer
          ref={this.setNavigationRef}
          onNavigationStateChange={AnalyticsService.setCurrentScreen}
        />
      </I18nextProvider>
    );
  }
}
