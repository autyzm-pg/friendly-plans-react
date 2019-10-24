import firebase, { RNFirebase } from 'react-native-firebase';

export const getPlanSubItemRef = (
  studentId: string,
  planId: string,
  planItemId: string,
  planSubItemId: string,
): RNFirebase.firestore.DocumentReference => getPlanSubItemsRef(studentId, planId, planItemId).doc(planSubItemId);

export const getPlanSubItemsRef = (
  studentId: string,
  planId: string,
  planItemId: string,
): RNFirebase.firestore.CollectionReference => getPlanItemRef(studentId, planId, planItemId).collection('subItems');

export const getPlanItemRef = (
  studentId: string,
  planId: string,
  planItemId: string,
): RNFirebase.firestore.DocumentReference => getPlanItemsRef(studentId, planId).doc(planItemId);

export const getPlanItemsRef = (studentId: string, planId: string): RNFirebase.firestore.CollectionReference =>
  getPlanRef(studentId, planId).collection('planItems');

export const getPlanRef = (studentId: string, planId: string): RNFirebase.firestore.DocumentReference =>
  getPlansRef(studentId).doc(planId);

export const getPlansRef = (studentId: string): RNFirebase.firestore.CollectionReference =>
  getStudentRef(studentId).collection('plans');

export const getStudentRef = (studentId: string): RNFirebase.firestore.DocumentReference =>
  getStudentsRef().doc(studentId);

export const getStudentsRef = (userId: string = getAuthenticatedUserId()): RNFirebase.firestore.CollectionReference =>
  getUserRef(userId).collection('students');

export const getUserRef = (userId: string): RNFirebase.firestore.DocumentReference => getUsersRef().doc(userId);

const getUsersRef = (): RNFirebase.firestore.CollectionReference => {
  return firebase.firestore().collection('users');
};

export const getAuthenticatedUserId = (): string => firebase.auth().currentUser!.uid;
