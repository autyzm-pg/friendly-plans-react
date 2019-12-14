// Always try to use Route from enum instead of magic strings
export enum Route {
  // AuthSwitchNavigator
  Welcome = 'Welcome',
  Unauthenticated = 'Unauthenticated',
  Authenticated = 'Authenticated',
  // RootStackNavigator
  Root = 'Root',
  Dialog = 'Dialog',
  StudentSettings = 'StudentSettings',
  StudentsList = 'StudentsList',
  StudentsListSearch = 'StudentsListSearch',
  // MainStackNavigator
  Dashboard = 'Dashboard',
  PlanActivity = 'PlanActivity',
  RunPlanList = 'RunPlanList',
  RunPlanSlide = 'RunPlanSlide',
  RunSubPlanList = 'RunSubPlanList',
  PlanItemTask = 'PlanItemTask',
  ImageLibrary = 'ImageLibrary',
  CreateFirstStudent = 'CreateFirstStudent',
  // UnauthenticatedStackNavigator
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ResetPassword = 'ResetPassword',
  // MainDrawerNavigator
  Home = 'Home',
  Logout = 'Logout',
}
