import firebase, { RNFirebase } from 'react-native-firebase';

import { i18n } from 'locale';

export enum StudentDisplayOption {
  LargeImageSlide = 'largeImageSlide',
  ImageWithTextSlide = 'imageWithTextSlide',
  ImageWithTextList = 'imageWithTextList',
  TextList = 'textList',
  TextSlide = 'textSlide',
}

export class Student {
  static create(): Promise<RNFirebase.firestore.DocumentReference> {
    return createStudent();
  }

  static getCollectionRef(): RNFirebase.firestore.CollectionReference {
    return getStudentsRef();
  }

  name!: string;
  id!: string;
  displaySettings!: StudentDisplayOption;
  textCapitalization!: string;
  textSize!: string;
  slideCardSwitch!: boolean;

  delete = (): Promise<void> => deleteStudent(this);

  update = (changes: object) => updateStudent(this, changes);

  createPlan = (): Promise<RNFirebase.firestore.DocumentReference> =>
    createPlanForStudent(this);

  getPlansRef = (): RNFirebase.firestore.CollectionReference =>
    getStudentPlansRef(this);
}

// Private API below
export const getStudentsRef = (
  userId = firebase.auth().currentUser!.uid,
): RNFirebase.firestore.CollectionReference =>
  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('students');

const createStudent = (): Promise<RNFirebase.firestore.DocumentReference> =>
  getStudentsRef().add({
    name: i18n.t('studentList:studentNamePlaceholder'),
  });

const deleteStudent = (student: Student): Promise<void> =>
  getStudentsRef()
    .doc(student.id)
    .delete();

const updateStudent = (student: Student, changes: object): Promise<void> =>
  getStudentsRef()
    .doc(student.id)
    .update(changes);

const createPlanForStudent = (
  student: Student,
): Promise<RNFirebase.firestore.DocumentReference> =>
  getStudentsRef()
    .doc(student.id)
    .collection('plans')
    .add({
      name: i18n.t('planList:planNamePlaceholder'),
      studentId: student.id,
    });

const getStudentPlansRef = (
  student: Student,
): RNFirebase.firestore.CollectionReference =>
  getStudentsRef()
    .doc(student.id)
    .collection('plans');
