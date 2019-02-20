import PushNotificationsService from '../PushNotificationsService';

describe('PushNotificationService', () => {
  const pushNotificationsService = new PushNotificationsService();

  it('should properly initialize', async () => {
    const spy = jest.spyOn(
      pushNotificationsService,
      'createNotificationChannel',
    );
    await pushNotificationsService.initialize();
    expect(spy).toBeCalled();
  });

  it('should request permission and receive it', async () => {
    const hasPermission = await pushNotificationsService.requestPermission();
    expect(hasPermission).toBe(true);
  });

  it('should return true when check for permission', async () => {
    const hasPermission = await pushNotificationsService.checkPermission();
    expect(hasPermission).toBe(true);
  });

  it('should get token from firebase', async () => {
    const token = await pushNotificationsService.getToken();
    expect(token).toBe('token');
  });
});
