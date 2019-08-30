import {RNFirebase} from 'react-native-firebase';
import {SubscribableModel} from './SubscribableModel';

export class ModelSubscriber<T> {

  private unsubscribeCollectionUpdatesCallback: any = null;
  private unsubscribeElementUpdatesCallback: any = null;

  subscribeCollectionUpdates = (parent: SubscribableModel, callback: (elements: T[]) => void): void => {
    // TODO: check if there no subscription already
    this.unsubscribeCollectionUpdatesCallback = parent.getChildCollectionRef().onSnapshot(
      this.parseCollectionDataToObjects(parent, callback)
    );
  };

  unsubscribeCollectionUpdates() {
    // TODO: check if there any subscription already
    this.unsubscribeCollectionUpdatesCallback();
    this.unsubscribeCollectionUpdatesCallback = null;
  }

  subscribeElementUpdates = (element: SubscribableModel, callback: (element: T) => void): void => {
    // TODO: check if there no subscription already
    this.unsubscribeElementUpdatesCallback = element.getRef().onSnapshot(
      this.parseSingleElementDataToObject(element, callback)
    );
  };

  unsubscribeElementUpdates() {
    // TODO: check if there any subscription already
    this.unsubscribeElementUpdatesCallback();
    this.unsubscribeElementUpdatesCallback = null;
  }

  private parseCollectionDataToObjects = (
    parent: SubscribableModel, callback: (elements: T[]) => void
  ): (querySnapshot: RNFirebase.firestore.QuerySnapshot) => void => {
    return (querySnapshot) => {
      const ChildType = parent.getChildType();
      const elements: T[] = querySnapshot.docs.map(document => {
        return Object.assign(new ChildType(), {
          id: document.id,
          ...document.data(),
        });
      });
      callback(elements);
    };
  };

  private parseSingleElementDataToObject = (
    element: SubscribableModel, callback: (element: T) => void
  ): (document: RNFirebase.firestore.DocumentSnapshot) => void => {
    return (document) => {
      if (document.exists) {
        const updatedElement = Object.assign(new element.constructor(), {
          id: document.id,
          ...document.data(),
        });
        callback(updatedElement);
      }
    };
  };

}
