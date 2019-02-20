import _AnalyticsService from './AnalyticsService';
import _CrashlyticsService from './CrashlyticsService';
import _NavigationService from './NavigationService';
import _PushNotificationsService from './PushNotificationsService';

export const NavigationService = new _NavigationService();
export const PushNotificationsService = new _PushNotificationsService();
export const AnalyticsService = new _AnalyticsService(NavigationService);
export const CrashlyticsService = new _CrashlyticsService();
