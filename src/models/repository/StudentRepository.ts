import {RNFirebase} from 'react-native-firebase';
import {i18n} from '../../locale';
import {Student} from '../Student';
import {getStudentRef, getStudentsRef} from './FirebaseRefProxy';


export class StudentRepository {

  static create = (): Promise<RNFirebase.firestore.DocumentReference> =>
    getStudentsRef().add({
      name: i18n.t('studentList:studentNamePlaceholder'),
  });

  static update = (studentId: string, changes: object): Promise<void> =>
    getStudentRef(studentId).update(changes);

  static delete = (studentId: string): Promise<void> =>
    getStudentRef(studentId).delete();


  private unsubscribeCollectionUpdatesFunc: any = null;
  private unsubscribeObjectUpdatesFunc: any = null;

  subscribeCollectionUpdates = (callback: (students: Student[]) => void): void => {
    // TODO: check if there no subscription already
    this.unsubscribeCollectionUpdatesFunc = getStudentsRef().onSnapshot(this.parseDocumentDataToObjects(callback));
  };

  unsubscribeCollectionUpdates() {
    // TODO: check if there any subscription already
    this.unsubscribeCollectionUpdatesFunc();
    this.unsubscribeCollectionUpdatesFunc = null;
  }

  subscribeObjectUpdates = (studentId: string, callback: (student: Student) => void): void => {
    // TODO: check if there no subscription already
    this.unsubscribeObjectUpdatesFunc = getStudentRef(studentId).onSnapshot(this.parseDocumentToObject(callback));
  };

  unsubscribeObjectUpdates() {
    // TODO: check if there any subscription already
    this.unsubscribeObjectUpdatesFunc();
    this.unsubscribeObjectUpdatesFunc = null;
  }

  private parseDocumentDataToObjects = (
    callback: (students: Student[]) => void
  ): (querySnapshot: RNFirebase.firestore.QuerySnapshot) => void => {
    return (querySnapshot) => {
      const students: Student[] = querySnapshot.docs.map(document => Student.fromDocument(document));
      callback(students);
    };
  };

  private parseDocumentToObject = (
    callback: (student: Student) => void
  ): (documentSnapshot: RNFirebase.firestore.DocumentSnapshot) => void => {
    return (documentSnapshot) => {
      if (documentSnapshot.exists) {
        const student: Student = Student.fromDocument(documentSnapshot);
        callback(student);
      }
    };
  };

}
