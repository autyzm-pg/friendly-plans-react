import { getStudentsRef } from './Student';

export enum PlanItemType {
  Task = 'task',
  Break = 'break',
  Interaction = 'interaction',
}

export interface PlanItem {
  name: string;
  type: PlanItemType;
}

export class Plan {
  name!: string;
  id!: string;
  studentId!: string;

  delete = (): Promise<void> => deletePlan(this);

  update = (changes: object) => updatePlan(this, changes);
}

// Private API below
const deletePlan = (plan: Plan): Promise<void> =>
  getStudentsRef()
    .doc(plan.studentId)
    .collection('plans')
    .doc(plan.id)
    .delete();

const updatePlan = (plan: Plan, changes: object): Promise<void> =>
  getStudentsRef()
    .doc(plan.studentId)
    .collection('plans')
    .doc(plan.id)
    .update(changes);
