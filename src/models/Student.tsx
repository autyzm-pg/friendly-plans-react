import { RNFirebase } from 'react-native-firebase';

import {StudentRepository} from './repository/StudentRepository';

export enum StudentDisplayOption {
  LargeImageSlide = 'largeImageSlide',
  ImageWithTextSlide = 'imageWithTextSlide',
  ImageWithTextList = 'imageWithTextList',
  TextList = 'textList',
  TextSlide = 'textSlide',
}

export class Student {

  static fromDocument = (document: RNFirebase.firestore.DocumentSnapshot): Student => {
    return Object.assign(new Student(), {
      id: document.id,
      ...document.data(),
    });
  };

  name!: string;
  id!: string;
  displaySettings!: StudentDisplayOption;
  textCase!: string;
  textSize!: string;
  slideCardSwitch!: boolean;

  delete = (): Promise<void> => StudentRepository.delete(this.id);
  update = (changes: object) => StudentRepository.update(this.id, changes);

}
