import { RNFirebase } from 'react-native-firebase';

import { i18n } from 'locale';
import { PlanItemType } from './PlanItem';
import { getStudentsRef } from './Student';

export class Plan {
  name!: string;
  id!: string;
  studentId!: string;

  delete = (): Promise<void> => deletePlan(this);

  update = (changes: object): Promise<void> => updatePlan(this, changes);

  createPlanItem = (
    planItemType: PlanItemType,
  ): Promise<RNFirebase.firestore.DocumentReference> =>
    createPlanItem(this, planItemType);

  getPlanItemsRef = (): RNFirebase.firestore.CollectionReference =>
    getPlanItemsRef(this);
}

// Private API below
const getPlanRef = (plan: Plan): RNFirebase.firestore.DocumentReference =>
  getStudentsRef()
    .doc(plan.studentId)
    .collection('plans')
    .doc(plan.id);

const deletePlan = (plan: Plan): Promise<void> => getPlanRef(plan).delete();

const updatePlan = (plan: Plan, changes: object): Promise<void> =>
  getPlanRef(plan).update(changes);

const getPlanItemsRef = (
  plan: Plan,
): RNFirebase.firestore.CollectionReference =>
  getPlanRef(plan).collection('planItems');

const createPlanItem = (
  plan: Plan,
  type: PlanItemType,
): Promise<RNFirebase.firestore.DocumentReference> =>
  getPlanItemsRef(plan).add({
    name: i18n.t('updatePlan:planItemNamePlaceholder'),
    studentId: plan.studentId,
    planId: plan.id,
    type,
  });
