import { RNFirebase } from 'react-native-firebase';
import { PlanItemFormData } from 'screens/planItemActivity/PlanItemForm';
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
  simpleTask: 'layers-clear',
  complexTask: 'layers',
  break: 'bell',
  interaction: 'account-multiple',
};

export class PlanItem implements SubscribableModel, PlanElement {
  static create = (
    plan: Plan,
    type: PlanItemType,
    name: string = i18n.t('updatePlan:planItemNamePlaceholder'),
    lastItemOrder: number,
  ): Promise<RNFirebase.firestore.DocumentReference> =>
    getPlanItemsRef(plan.studentId, plan.id).add({
      name,
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
      nameForChild: i18n.t('planItemActivity:taskNameForChild'),
      order: lastItemOrder + 1,
    });

  static async createPlanItem(
    plan: Plan,
    type: PlanItemType,
    data: PlanItemFormData,
    lastItemOrder: number,
  ): Promise<PlanItem> {
    const { id } = await getPlanItemsRef(plan.studentId, plan.id).add({
      name: data.name,
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
      nameForChild: i18n.t('planItemActivity:taskNameForChild'),
      order: lastItemOrder + 1,
      time: data.time,
    });

    return Object.assign(new PlanItem(), {
      id,
      name: data.name,
      studentId: plan.studentId,
      planId: plan.id,
      type,
      completed: false,
      lector: false,
      nameForChild: i18n.t('planItemActivity:taskNameForChild'),
      order: lastItemOrder + 1,
      time: data.time,
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
  nameForChild!: string;
  order!: number;
  pressed?: boolean;

  getIconName = (): string => {
    return PLAN_ITEMS_ICONS[this.type];
  };

  isTask = (): boolean => this.type === PlanItemType.SimpleTask || this.type === PlanItemType.ComplexTask;
  isSimpleTask = (): boolean => this.type === PlanItemType.SimpleTask;
  complete = () => {
    this.update({ completed: true });
  };

  setOrder = (order: number) => {
    this.update({ order });
  };
  setComplete = (completed: boolean) => {
    this.update({ completed });
  };

  changeType = (type: PlanItemType) => {
    this.update({
      type,
    });
  };

  setTimer = (type: number) => {
    this.update({ type });
  };

  changeImage = (image: string) => {
    this.update({
      image,
    });
  };


  update = (changes: object) => getPlanItemRef(this.studentId, this.planId, this.id).update(changes);
  delete = (): Promise<void> => getPlanItemRef(this.studentId, this.planId, this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () =>
    getPlanSubItemsRef(this.studentId, this.planId, this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanSubItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanItemRef(this.studentId, this.planId, this.id);
}
