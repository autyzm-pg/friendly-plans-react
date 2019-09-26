import { RNFirebase } from 'react-native-firebase';

import { getPlanItemsRef, getPlanRef, getPlansRef } from './FirebaseRefProxy';
import { PlanItem } from './PlanItem';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export class Plan implements SubscribableModel {
  static create(studentId: string, name: string): Promise<RNFirebase.firestore.DocumentReference> {
    return getPlansRef(studentId).add({
      studentId,
      name,
    });
  }

  name!: string;
  id!: string;
  studentId!: string;

  update = (changes: object) => getPlanRef(this.studentId, this.id).update(changes);
  delete = (): Promise<void> => getPlanRef(this.studentId, this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () =>
    getPlanItemsRef(this.studentId, this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanRef(this.studentId, this.id);
}
