import firebase, {RNFirebase} from 'react-native-firebase';

export const getPlanRef = (studentId: string, planId: string): RNFirebase.firestore.DocumentReference =>
    getPlansRef(studentId).doc(planId);


export const getPlansRef = (studentId: string): RNFirebase.firestore.CollectionReference =>
    getStudentRef(studentId).collection('plans');


export const getStudentRef = (studentId: string): RNFirebase.firestore.DocumentReference =>
    getStudentsRef().doc(studentId);


export const getStudentsRef = (): RNFirebase.firestore.CollectionReference =>
    getUserRef(getAuthenticatedUserId()).collection('students');


const getUserRef = (userId: string): RNFirebase.firestore.DocumentReference =>
    getUsersRef().doc(userId);


const getUsersRef = (): RNFirebase.firestore.CollectionReference => {
    return firebase
        .firestore()
        .collection('users');
};


const getAuthenticatedUserId = (): string => firebase.auth().currentUser!.uid;

