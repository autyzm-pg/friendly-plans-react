import { RNFirebase } from 'react-native-firebase';

import { i18n } from '../locale';
import { getPlanItemsRef, getPlanRef, getPlansRef } from './FirebaseRefProxy';
import { PlanItem } from './PlanItem';
import { Student } from './Student';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export class Plan implements SubscribableModel {
  static create = (student: Student): Promise<RNFirebase.firestore.DocumentReference> =>
    getPlansRef(student.id).add({
      name: i18n.t('planList:planNamePlaceholder'),
      studentId: student.id,
    });

  name!: string;
  id!: string;
  studentId!: string;

  update = (changes: object) => getPlanRef(this.studentId, this.id).update(changes);
  delete = (): Promise<void> => getPlanRef(this.studentId, this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () =>
    getPlanItemsRef(this.studentId, this.id).orderBy('order', 'asc');
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanRef(this.studentId, this.id);
}
