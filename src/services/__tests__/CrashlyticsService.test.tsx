import CrashlyticsService from '../CrashlyticsService';

describe('CrashlyticsService', () => {
  it('should disable crashlytics for debug', () => {
    const crashlytics = new CrashlyticsService();
    expect(crashlytics.enabled).toBe(false);
  });
});
