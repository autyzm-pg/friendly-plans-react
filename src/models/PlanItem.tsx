import { RNFirebase } from 'react-native-firebase';

import { getNoModelPlanItemsRef } from './Plan';

export enum PlanItemType {
  Task = 'task',
  Break = 'break',
  Interaction = 'interaction',
}

export class PlanItem {
  name!: string;
  id!: string;
  type!: PlanItemType;
  planId!: string;
  studentId!: string;
  completed!: boolean;

  getIconName = (): string => {
    const icons = {
      task: 'layers',
      break: 'bell',
      interaction: 'account-multiple',
    };
    return icons[this.type];
  };

  update = (changes: object) => updatePlanItem(this, changes);
}

const getPlanItemRef = (
  planItem: PlanItem
): RNFirebase.firestore.DocumentReference  =>
  getNoModelPlanItemsRef(planItem.studentId,planItem.planId).doc(planItem.id);

const updatePlanItem = (planItem: PlanItem, changes: object): Promise<void> =>
  getPlanItemRef(planItem).update(changes);