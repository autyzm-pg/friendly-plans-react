import { PlanItemType } from './PlanItem';

export interface PlanItemComplexFormData {
  name: string;
  time: number;
  taskType: PlanItemType;
}
