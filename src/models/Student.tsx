import { RNFirebase } from 'react-native-firebase';

import { getPlansRef, getStudentRef, getStudentsRef } from './FirebaseRefProxy';
import { Plan } from './Plan';
import { ParameterlessConstructor, SubscribableModel } from './SubscribableModel';

export enum StudentDisplayOption {
  LargeImageSlide = 'largeImageSlide',
  ImageWithTextSlide = 'imageWithTextSlide',
  TextSlide = 'textSlide',
  ImageWithTextList = 'imageWithTextList',
  TextList = 'textList',
}

export enum StudentTextSizeOption {
  Small = 's',
  Medium = 'm',
  Large = 'l',
  ExtraLarge = 'xl',
}

export interface StudentData {
  name: string;
  displaySettings: StudentDisplayOption;
  textSize: StudentTextSizeOption;
  isUpperCase: boolean;
  isSwipeBlocked: boolean;
}

export class Student implements SubscribableModel, StudentData {
  static create = (data: StudentData): Promise<RNFirebase.firestore.DocumentReference> => getStudentsRef().add(data);

  id!: string;
  name: string;
  displaySettings: StudentDisplayOption;
  textSize: StudentTextSizeOption;
  isUpperCase: boolean;
  isSwipeBlocked: boolean;

  constructor() {
    this.name = '';
    this.displaySettings = StudentDisplayOption.ImageWithTextSlide;
    this.textSize = StudentTextSizeOption.Large;
    this.isUpperCase = false;
    this.isSwipeBlocked = false;
  }

  update = (changes: Partial<StudentData>) => getStudentRef(this.id).update(changes);
  delete = (): Promise<void> => getStudentRef(this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () => getPlansRef(this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => Plan;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getStudentRef(this.id);
}
