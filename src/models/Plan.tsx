export interface Plan {
  name: string;
  id: string;
  actions: PlanItem[];
}

export enum PlanItemType {
  Task = 'task',
  Break = 'break',
  Interaction = 'interaction',
}

export interface PlanItem {
  name: string;
  type: PlanItemType;
}
