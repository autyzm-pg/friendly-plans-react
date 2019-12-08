import { RNFirebase } from 'react-native-firebase';
import { getAuthenticatedUserId, getStudentsRef, getUserRef } from './FirebaseRefProxy';
import { Student } from './Student';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export interface User {
  id: number;
}

export class AuthUser implements SubscribableModel {
  static getAuthenticatedUser = (): AuthUser => {
    return new AuthUser(getAuthenticatedUserId());
  };

  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () => getStudentsRef(this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => Student;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getUserRef(this.id);
  getCurrentStudent = () =>
    this.getRef()
      .get()
      .then((doc: any) => {
        return doc.data() ? doc.data().currentStudent.studentId : '';
      });
  setCurrentStudent = (studentId: string) => this.getRef().set({ currentStudent: { studentId } });
}
