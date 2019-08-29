import {RNFirebase} from 'react-native-firebase';
import {i18n} from '../../locale';
import {Plan} from '../Plan';
import {getPlanRef, getPlansRef, getStudentsRef} from './FirebaseRefProxy';


export class PlanRepository {

  static create = (studentId: string): Promise<RNFirebase.firestore.DocumentReference> =>
    getStudentsRef().add({
      name: i18n.t('planList:planNamePlaceholder'),
      studentId,
    });

  static update = (studentId: string, planId: string, changes: object): Promise<void> =>
    getPlanRef(studentId, planId).update(changes);

  static delete = (studentId: string, planId: string): Promise<void> =>
    getPlanRef(studentId, planId).delete();

  private unsubscribeUpdates: any = null;

  subscribeCollectionUpdates = (studentId: string, callback: (plans: Plan[]) => void): void => {
    // TODO: check if there no subscription already
    this.unsubscribeUpdates = getPlansRef(studentId).onSnapshot(this.parseDocumentDataToObjects(callback));
  };

  unsubscribeCollectionUpdates() {
    // TODO: check if there any subscription already
    this.unsubscribeUpdates();
    this.unsubscribeUpdates = null;
  }

  private parseDocumentDataToObjects = (
    callback: (plans: Plan[]) => void
  ): (querySnapshot: RNFirebase.firestore.QuerySnapshot) => void => {
    return (querySnapshot) => {
      const plans: Plan[] = querySnapshot.docs.map(doc =>
        Object.assign(new Plan(), {
          id: doc.id,
          ...doc.data(),
        })
      );
      callback(plans);
    };
  };

}
