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
    guide1:
      'Provide you email in the field below. We will send you link to reset your password.',
    guide2:
      'After setting up new password, sign in with newly set password at the login screen.',
    resetPasswordButtonLabel: 'Reset Password',
    userNotFound:
      'No user found for provided email. Make sure to provide email you registered.',
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
    addTask: 'Add Task',
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
    createPlan: 'Add a Plan',
    planNamePlaceholder: 'Enter Plan name...',
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
  studentSettings: {
    screenTitle: '{{studentName}} - Update settings',
    textCaseSettings: 'Text Case',
    textSizeSettings: 'Text Size',
    textSettingsUpperCase: 'UPPER CASE',
    textSettingsStandardCase: 'Standard Case',
    textSettingsSizeS: 'S',
    textSettingsSizeM: 'M',
    textSettingsSizeL: 'L',
    textSettingsSizeXL: 'XL',
    largeImageSlide: 'large image - slide',
    imageWithTextSlide: 'image + text - slide',
    ImageWithTextList: 'image + text - list',
    textList: 'text - list',
    textSlide: 'text - slide',
  },
  runPlan: {
    next: 'Next',
    wait: 'Wait...',
  },
};

export default translations;
