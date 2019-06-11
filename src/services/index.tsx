import _AnalyticsService from './AnalyticsService';
import _CrashlyticsService from './CrashlyticsService';
import _NavigationService from './NavigationService';

export const NavigationService = new _NavigationService();
export const AnalyticsService = new _AnalyticsService(NavigationService);
export const CrashlyticsService = new _CrashlyticsService();
