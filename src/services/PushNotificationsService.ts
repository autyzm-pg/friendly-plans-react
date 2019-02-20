import { Platform } from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';

import { i18n } from 'locale';

export default class PushNotificationsService {
  initialize = async () => {
    const hasPermission = await this.checkPermission();
    /* istanbul ignore else */
    if (hasPermission) {
      this.createNotificationChannel();
      this.createNotificationListeners();
    }
  };

  checkPermission = async (): Promise<boolean> => {
    const enabled = await firebase.messaging().hasPermission();
    /* istanbul ignore else */
    if (enabled) {
      const token = await this.getToken();
      return !!token;
    } else {
      return this.requestPermission();
    }
  };

  getToken = (): Promise<string> => {
    return firebase.messaging().getToken();
  };

  requestPermission = async (): Promise<boolean> => {
    try {
      await firebase.messaging().requestPermission();
      const token = await this.getToken();
      return !!token;
    } catch (error) {
      /* User has rejected permissions */
      /* istanbul ignore next */
      return false;
    }
  };

  createNotificationChannel = () => {
    /* istanbul ignore next */
    if (Platform.OS === 'android') {
      const channel = new firebase.notifications.Android.Channel(
        'Notifications',
        i18n.t('notifications:channelName'),
        firebase.notifications.Android.Importance.Max,
      ).setDescription(i18n.t('notifications:channelDescription'));
      firebase.notifications().android.createChannel(channel);
    }
  };

  createNotificationListeners = async () => {
    await firebase.messaging().getToken();
    firebase.notifications().onNotification(this.handleNotification);
    firebase.notifications().onNotificationOpened(this.handleNotificationOpen);

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();

    /* istanbul ignore else */
    if (notificationOpen) {
      this.handleNotificationOpen(notificationOpen);
    }
  };

  /* Handle notifications within the app when app is running in foreground */
  /* istanbul ignore next */
  handleNotification = (notification: RNFirebase.notifications.Notification) =>
    null;

  /* Handle notifications when app is open from the notification */
  /* istanbul ignore next */
  handleNotificationOpen = (
    notification: RNFirebase.notifications.NotificationOpen,
  ) => null;
}
