import firebase from 'react-native-firebase';
import { NavigationState } from 'react-navigation';

import { User } from 'models';
import NavigationService from './NavigationService';

export default class AnalyticsService {
  navigationService: NavigationService;
  user: User | null;
  screenName?: string;

  constructor(navigationService: NavigationService) {
    firebase.analytics().setAnalyticsCollectionEnabled(!__DEV__);
    this.navigationService = navigationService;
    this.user = null;
  }

  setCurrentScreen = (
    prevState: NavigationState,
    currentState: NavigationState,
  ) => {
    const currentScreen = this.navigationService.getActiveRouteName(
      currentState,
    );
    const prevScreen = this.navigationService.getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      firebase.analytics().setCurrentScreen(currentScreen, currentScreen);
      this.screenName = currentScreen;
    }
  };

  setCurrentUser = (user: User | null) => {
    this.user = user;
    firebase.analytics().setUserId(this.user ? this.user!.id.toString() : null);
  };
}
