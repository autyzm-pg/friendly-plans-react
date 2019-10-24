import { RNFirebase } from 'react-native-firebase';

import { DEFAULT_EMOJI } from '../assets/emojis';
import { getPlanItemsRef, getPlanRef, getPlansRef } from './FirebaseRefProxy';
import { PlanItem } from './PlanItem';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export class Plan implements SubscribableModel {
  static create = (studentId: string, name: string): Promise<RNFirebase.firestore.DocumentReference> =>
    getPlansRef(studentId).add({
      name,
      studentId,
      emoji: DEFAULT_EMOJI,
    });

  static async isPlanExist(studentId: string, name: string): Promise<boolean> {
    const plans: RNFirebase.firestore.QuerySnapshot = await getPlansRef(studentId)
      .where('name', '==', name)
      .get();

    return !plans.empty;
  }

  static async createPlan(studentId: string, name: string): Promise<Plan> {
    const { id } = await getPlansRef(studentId).add({
      name,
      studentId,
      emoji: DEFAULT_EMOJI,
    });

    return Object.assign(new Plan(), {
      id,
      name,
      studentId,
      emoji: DEFAULT_EMOJI,
    });
  }

  name!: string;
  id!: string;
  studentId!: string;
  emoji!: string;

  update = (changes: object) => getPlanRef(this.studentId, this.id).update(changes);
  delete = (): Promise<void> => getPlanRef(this.studentId, this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.Query = () =>
    getPlanItemsRef(this.studentId, this.id).orderBy('order', 'asc');
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanRef(this.studentId, this.id);
}
