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

  getIconName = (): string => {
    const icons = {
      task: 'layers',
      break: 'bell',
      interaction: 'account-multiple'
    };
    return icons[this.type];
  }
}
