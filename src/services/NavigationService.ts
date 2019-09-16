import { NavigationActions, NavigationContainerComponent, NavigationState } from 'react-navigation';

import { DialogProps } from 'models';

interface ScreenProps extends Partial<DialogProps> {
  [property: string]: any;
}

export default class NavigationService {
  navigator?: NavigationContainerComponent;

  setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) => {
    this.navigator = navigatorRef;
  };

  navigate = (routeName: string, params?: ScreenProps) => {
    this.navigator!.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  };

  goBack = () => {
    this.navigator!.dispatch(NavigationActions.back());
  };

  getActiveRouteName = (navigationState: NavigationState): string => {
    if (!navigationState) {
      return '';
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route as NavigationState);
    }
    return route.routeName;
  };
}
