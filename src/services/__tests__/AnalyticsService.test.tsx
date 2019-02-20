import AnalyticsService from '../AnalyticsService';
import NavigationService from '../NavigationService';

describe('AnalyticsService', () => {
  const navigationService = new NavigationService();
  const analyticsService = new AnalyticsService(navigationService);

  it('should set user context properly', () => {
    const user = {
      id: 1,
      accountName: 'username',
    } as any;
    analyticsService.setCurrentUser(user);
    expect(analyticsService.user).toBe(user);
  });

  it('should set current screen name', () => {
    analyticsService.screenName = 'Home';
    const currentState = {
      index: 0,
      routes: [
        {
          routeName: 'UserProfile',
        },
      ],
    } as any;
    const previousState = {
      index: 0,
      routes: [
        {
          routeName: 'Home',
        },
      ],
    } as any;
    analyticsService.setCurrentScreen(previousState, currentState);
    expect(analyticsService.screenName).toBe('UserProfile');
  });

  it('should not set current screen name if it did not changed', () => {
    analyticsService.screenName = 'Home';
    const currentState = {
      index: 0,
      routes: [
        {
          routeName: 'Home',
        },
      ],
    } as any;
    const previousState = {
      index: 0,
      routes: [
        {
          routeName: 'Home',
        },
      ],
    } as any;
    analyticsService.setCurrentScreen(previousState, currentState);
    expect(analyticsService.screenName).toBe('Home');
  });

  it('should reset firebase user id to null when reseting user', () => {
    analyticsService.setCurrentUser(null);
    expect(analyticsService.user).toBe(null);
  });
});
