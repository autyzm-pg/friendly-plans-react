const translations = {
  common: {
    cancel: 'Cancel',
    ok: 'OK',
    yes: 'Yes',
    email: 'Email address',
    password: 'Password',
    error: 'Error',
    success: 'Success',
    unknownError: 'Unknown error occured',
  },
  validation: {
    email: 'Must be a valid email',
    required: 'This field is required',
    passwordLength: 'Password is too short',
    acceptRequired: 'You need to accept our Terms of Use',
  },
  notifications: {
    channelName: 'Notifications',
    channelDescription: 'Get urgent notifications about the service',
  },
  signIn: {
    signIn: 'Sign In',
    signInButton: 'Sign In',
    signInAsAnonymous: 'Use the App as Guest',
    signUpTip: "don't have an account?",
    anonymousTip: 'you can also',
    forgotPassword: 'forgot password?',
  },
  signUp: {
    signUp: 'Sign Up',
    signUpButton: 'Sign up',
    accept: 'I accept ',
    termsOfUse: 'Terms of Use',
  },
  resetPassword: {
    resetPassword: 'Reset password',
    guide1: 'Provide you email in the field below. We will send you link to reset your password.',
    guide2: 'After setting up new password, sign in with newly set password at the login screen.',
    resetPasswordButtonLabel: 'Reset Password',
    userNotFound: 'No user found for provided email. Make sure to provide email you registered.',
    resetPasswordSuccess:
      'Email with password reset link has been sent. After setting up new password, sign in with newly set password at the login screen.',
  },
  content: {
    content: 'Content',
    contentList: 'Content List',
  },
  settings: {
    settings: 'Settings',
    signOutTitle: 'Sign out',
    signOutSubtitle: 'After you sign out, you will need to sign in again.',
    signOutAction: 'Sign out',
    signOutDialogTitle: 'Sign out',
    signOutDialogDescription: 'Are you sure you want to sign out?',
  },
  sidebar: {
    addTask: 'Add SimpleTask',
    addStudent: 'Add Student',
    takeAPicture: 'Take a Picture',
    recordSound: 'Record Sound',
  },
  studentList: {
    createStudent: 'Add a Student',
    studentNamePlaceholder: 'Enter Student name...',
    removeStudentTitle: 'Confirm',
    removeStudentDescription:
      'Are you sure you want to remove {{name}} from your student list?\n This action cannot be undone.',
  },
  planList: {
    viewTitle: 'All Plans',
    createPlan: 'Add new plan',
    copyPlan: 'Copy existing plan',
    conjunction: 'lub',
    planNamePlaceholder: 'Muzykowanie',
  },
  updatePlan: {
    screenTitle: '{{studentName}} - Update a plan',
    removePlanTitle: 'Confirm',
    removePlanDescription:
      'Are you sure you want to plan "{{name}}" from student plan list?\n This action cannot be undone.',
    addBreak: 'Add break',
    addInteraction: 'Add interaction',
    addTask: 'Add task',
    planItemNamePlaceholder: 'Enter Plan Item name...',
  },
  updatePlanItem: {
    planSubItemNamePlaceholder: 'Enter sub item name...',
    taskComplexity: 'Simple/Complex',
    simpleTask: 'S',
    complexTask: 'C',
    addSubPlanItem: 'Add',
  },
  studentSettings: {
    studentName: "Student's name",
    taskView: "Task's view",
    screenTitle: "Student's settings",
    textSettingsSizeS: 'Font size: S',
    textSettingsSizeM: 'Font size: M',
    textSettingsSizeL: 'Font size: L',
    textSettingsSizeXL: 'Font size: XL',
    largeImageSlide: 'Large image as a slide',
    imageWithTextSlide: 'Image with text label as a slide',
    textSlide: 'Just text as a slide',
    imageWithTextList: 'image with text label as a list',
    textList: 'Just text label as a list',
    uppercase: 'Uppercase letters',
    blockSwipe: 'Block swipe',
  },
  studentsList: {
    screenTitle: 'Select student',
  },
  runPlan: {
    next: 'Next',
    wait: 'Wait...',
  },
};

export default translations;
