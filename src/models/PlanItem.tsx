import { RNFirebase } from 'react-native-firebase';

import {OperationalError} from '../infrastructure/Errors';
import {i18n} from '../locale';
import {getStudentsRef} from './Student';

export enum PlanItemType {
  SimpleTask = 'simpleTask',
  ComplexTask = 'complexTask',
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
  time!: number;

  getIconName = (): string => {
    const icons = {
      task: 'layers',
      break: 'bell',
      interaction: 'account-multiple',
    };
    return icons[this.type];
  };

  isTask = (): boolean => this.type === PlanItemType.SimpleTask || this.type === PlanItemType.ComplexTask;

  update = (changes: object): Promise<void> => this.getPlanItemRef().update(changes);

  getSubItemsRef = (): RNFirebase.firestore.CollectionReference  => {
    return this.getPlanItemRef().collection('subItems');
  };

  createSubItem = (): Promise<RNFirebase.firestore.DocumentReference> => {
    if (this.type !== PlanItemType.ComplexTask) {
        throw new OperationalError();
    }
    return this.getPlanItemRef().collection('subItems').add({
        name: i18n.t('updatePlan:planItemNamePlaceholder'),
        planItemId: this.id,
        completed: false,
    });
  };

  deletePlanSubItem = (planSubItemId: string): Promise<void> => {
    return this.getSubItemsRef().doc(planSubItemId).delete();
  };

  updatePlanSubItem = (planSubItemId: string, changes: object): Promise<void> => {
    return this.getSubItemsRef().doc(planSubItemId).update(changes);
  };

  getPlanItemRef = (): RNFirebase.firestore.DocumentReference => {
    return getStudentsRef()
        .doc(this.studentId)
        .collection('plans')
        .doc(this.planId)
        .collection('planItems')
        .doc(this.id);
  };
}
