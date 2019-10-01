import { RNFirebase } from 'react-native-firebase';

import { getPlanItemsRef, getPlanRef, getPlansRef } from './FirebaseRefProxy';
import { PlanItem } from './PlanItem';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export class Plan implements SubscribableModel {
  static createDocumentRef = (studentId: string, name: string): Promise<RNFirebase.firestore.DocumentReference> =>
    getPlansRef(studentId).add({
      name,
      studentId,
    });

  static async create(studentId: string, name: string): Promise<Plan> {
    const { id } = await getPlansRef(studentId).add({
      name,
      studentId,
    });

    return Object.assign(new Plan(), {
      id,
      name,
      studentId,
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
