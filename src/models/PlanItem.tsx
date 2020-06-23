import firebase, { RNFirebase } from 'react-native-firebase';
import { i18n } from '../locale';
import { getPlanItemRef, getPlanItemsRef, getPlanSubItemsRef } from './FirebaseRefProxy';
import { Plan } from './Plan';
import { PlanElement } from './PlanElement';
import { PlanItemFormData } from './PlanItemFormData';
import { PlanSubItem } from './PlanSubItem';
import SubitemReference from './SubitemReference';
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
    parent?: RNFirebase.firestore.DocumentReference,
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
      parent,
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
      parent,
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
  parent?: RNFirebase.firestore.DocumentReference;
  subtasks?: PlanItem[];

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

  setParent = (planItemParent: PlanItem) => {
    this.update({
      parent: planItemParent.id,
    });
  };

  addSubtask = (subtaskItem: PlanItem) => {
    const subtaskRef = this.getRef()
      .collection('subtask')
      .doc();
    subtaskRef.set({
      ref: subtaskItem.id,
    });
  };

  deleteAllSubtasks = async (): Promise<void> => {
    const subtasks = await this.getRef()
      .collection('subtask')
      .get();

    const itemsToDelete: Array<Promise<void>> = [];

    subtasks.docs.forEach(snap => {
      const data = snap.data();
      if (data) {
        const subItem = this.planSubitem(data);
        const subtasktRef = getPlanItemRef(this.studentId, this.planId, subItem.ref);
        itemsToDelete.push(subtasktRef.delete());
        itemsToDelete.push(snap.ref.delete());
      }
    });
    Promise.all(itemsToDelete);
  };

  update = (changes: object) => getPlanItemRef(this.studentId, this.planId, this.id).update(changes);
  updateSubtask = (changes: object, subtaskId: string) =>
    getPlanItemRef(this.studentId, this.planId, subtaskId).update(changes);

  getSubtasks = async (): Promise<PlanItem[]> => {
    const subtasks = await this.getRef()
      .collection('subtask')
      .get();

    const itemsToDelete: Array<Promise<RNFirebase.firestore.DocumentSnapshot>> = [];

    subtasks.docs.forEach(snap => {
      const data = snap.data();
      if (data) {
        const subItem = this.planSubitem(data);
        const subtasktRef = getPlanItemRef(this.studentId, this.planId, subItem.ref);
        itemsToDelete.push(subtasktRef.get());
      }
    });
    const result = await Promise.all(itemsToDelete);

    return result.map(x => {
      const data = x.data();
      return Object.assign(new PlanItem(), {
        id: x.id,
        ...data,
      });
    });
  };

  planSubitem = (data: object) => {
    return Object.assign(new SubitemReference(), data);
  };

  delete = async (): Promise<void> => {
    if (!this.isSimpleTask()) {
      await this.deleteAllSubtasks();
    }
    getPlanItemRef(this.studentId, this.planId, this.id).delete();
  };

  getSubtasksFromSnap = async (snap: RNFirebase.firestore.QuerySnapshot): Promise<PlanItem[]> => {
    const subitems: PlanItem[] = [];
    snap.forEach(async doc => {
      const reference = Object.assign(new SubitemReference(), doc.data());
      const subitemSnap = await getPlanItemRef(this.studentId, this.planId, reference.ref).get();
      const subitem = Object.assign(new PlanItem(), { id: subitemSnap.id, ...subitemSnap.data() });
      subitems.push(subitem);
    });
    return subitems;
  };

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () =>
    getPlanSubItemsRef(this.studentId, this.planId, this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => PlanSubItem;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getPlanItemRef(this.studentId, this.planId, this.id);
}
