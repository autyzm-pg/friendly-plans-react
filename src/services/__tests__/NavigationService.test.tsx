import NavigationService from '../NavigationService';

describe('NavigationService', () => {
  const navigationService = new NavigationService();
  const navigator = {
    dispatch: jest.fn(),
  } as any;

  it('should set top level navigator', () => {
    navigationService.setTopLevelNavigator(navigator);
    expect(navigationService.navigator).toBe(navigator);
  });

  it('should dispatch action on navigate', () => {
    navigationService.navigate('route');
    expect(navigator.dispatch).toBeCalled();
  });

  it('should get active route name', () => {
    const navigationState = {
      index: 0,
      routes: [
        {
          index: 0,
          routes: [
            {
              routeName: 'UserProfile',
            },
          ],
        },
      ],
    } as any;
    expect(navigationService.getActiveRouteName(navigationState)).toBe('UserProfile');
  });

  it('should return empty string when no navigation state is present', () => {
    const navigationState = null as any;
    expect(navigationService.getActiveRouteName(navigationState)).toBe('');
  });
});
