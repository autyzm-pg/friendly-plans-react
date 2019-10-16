import { RNFirebase } from 'react-native-firebase';
import { i18n } from '../locale';
import { getPlanItemRef, getPlanItemsRef, getPlanSubItemsRef } from './FirebaseRefProxy';
import { Plan } from './Plan';
import { PlanElement } from './PlanElement';
import { PlanSubItem } from './PlanSubItem';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export enum PlanItemType {
  SimpleTask = 'simpleTask',
  ComplexTask = 'complexTask',
  Break = 'break',
  Interaction = 'interaction',
  SubElement = 'subElement',
}

const PLAN_ITEMS_ICONS = {
  simpleTask: 'layers',
  complexTask: 'layers',
  break: 'bell',
  interaction: 'account-multiple',
};

export class PlanItem implements SubscribableModel, PlanElement {
  static create = (
    plan: Plan,
    name: string = i18n.t('updatePlan:planItemNamePlaceholder'),
    type: PlanItemType,
  ): Promise<RNFirebase.firestore.DocumentReference> =>
    getPlanItemsRef(plan.studentId, plan.id).add({
      name,
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
    });

  static async createPlanItem(
    plan: Plan,
    name: string = i18n.t('updatePlan:planItemNamePlaceholder'),
    type: PlanItemType,
  ): Promise<PlanItem> {
    const { id } = await getPlanItemsRef(plan.studentId, plan.id).add({
      name,
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
    });

    return Object.assign(new PlanItem(), {
      id,
      name: i18n.t('updatePlan:planItemNamePlaceholder'),
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
    });
  }

  id!: string;
  name!: string;
  type!: PlanItemType;
  planId!: string;
  studentId!: string;
  completed!: boolean;
  time!: number;
  image!: string;
  lector!: boolean;

  getIconName = (): string => {
    return PLAN_ITEMS_ICONS[this.type];
  };

  isTask = (): boolean => this.type === PlanItemType.SimpleTask || this.type === PlanItemType.ComplexTask;
  complete = () => {
    this.update({ completed: true });
  };

  update = (changes: object) => getPlanItemRef(this.studentId, this.planId, this.id).update(changes);
  delete = (): Promise<void> => getPlanItemRef(this.studentId, this.planId, this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () =>
    getPlanSubItemsRef(this.studentId, this.planId, this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanSubItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanItemRef(this.studentId, this.planId, this.id);
}
