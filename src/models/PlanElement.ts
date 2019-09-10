import { PlanItemType } from './PlanItem';

export interface PlanElement {
  id: string;
  name: string;
  type: PlanItemType;
  completed: boolean;
  time: number;
  lector: boolean;

  complete: () => void;
  update: (changes: any) => void;
}
