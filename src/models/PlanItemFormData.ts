import { PlanItemType } from './PlanItem';

export interface PlanItemFormData {
  name: string;
  time: number;
  nameForChild: string;
  taskType: PlanItemType;
}
