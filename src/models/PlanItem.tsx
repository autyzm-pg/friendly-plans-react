import { RNFirebase } from 'react-native-firebase';

import {getStudentsRef} from './Student';

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
  completed!: boolean;
  time!: number;

  update = (changes: object): Promise<void> => this.getPlanItemRef().update(changes);

  getIconName = (): string => {
    const icons = {
      task: 'layers',
      break: 'bell',
      interaction: 'account-multiple',
    };
    return icons[this.type];
  };

  private getPlanItemRef = (): RNFirebase.firestore.DocumentReference  => {
    return getStudentsRef()
        .doc(this.studentId)
        .collection('plans')
        .doc(this.planId)
        .collection('planItems')
        .doc(this.id);
  };
}
