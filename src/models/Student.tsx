import { RNFirebase } from 'react-native-firebase';

import { i18n } from '../locale';
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

const getRandomStudentName = () => {
  const names = ['Adrian', 'Adam K.', 'Czarek', 'Czesiu', 'Filipek', 'Grzesiu', 'Gracjanek', 'Kamil'];
  return names[Math.floor(Math.random() * names.length)];
};

export class Student implements SubscribableModel {
  static create = (): Promise<RNFirebase.firestore.DocumentReference> =>
    getStudentsRef().add({
      name: getRandomStudentName(),
    });

  name!: string;
  id!: string;
  displaySettings!: StudentDisplayOption;
  textSize!: StudentTextSizeOption;
  isUpperCase!: boolean;
  isSwipeBlocked!: boolean;

  update = (changes: object) => getStudentRef(this.id).update(changes);
  delete = (): Promise<void> => getStudentRef(this.id).delete();

  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference = () => getPlansRef(this.id);
  getChildType: () => ParameterlessConstructor<SubscribableModel> = () => Plan;
  getRef: () => RNFirebase.firestore.DocumentReference = () => getStudentRef(this.id);
}
