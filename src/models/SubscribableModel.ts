import {RNFirebase} from 'react-native-firebase';

export type ParameterlessConstructor<T> = new () => T;

export interface SubscribableModel {
  getRef: () => RNFirebase.firestore.DocumentReference;
  getChildCollectionRef: () => RNFirebase.firestore.CollectionReference;

  getChildType: () => ParameterlessConstructor<any>;
  constructor: any;
}
