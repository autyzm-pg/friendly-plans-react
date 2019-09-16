import { RNFirebase } from 'react-native-firebase';
import { OperationalError } from '../infrastructure/Errors';
import { SubscribableModel } from './SubscribableModel';

export class ModelSubscriber<T> {
  private unsubscribeCollectionUpdatesCallback: any = null;
  private unsubscribeElementUpdatesCallback: any = null;

  subscribeCollectionUpdates = (parent: SubscribableModel, callback: (elements: T[]) => void): void => {
    if (this.unsubscribeCollectionUpdatesCallback !== null) {
      throw new OperationalError(
        'Trying to subscribe on collection updates when there is a subscription already. Unsubscribe first.',
      );
    }
    this.unsubscribeCollectionUpdatesCallback = parent
      .getChildCollectionRef()
      .onSnapshot(this.parseCollectionDataToObjects(parent, callback));
  };

  unsubscribeCollectionUpdates = () => {
    if (this.unsubscribeCollectionUpdatesCallback === null) {
      throw new OperationalError(
        'Trying to unsubscribe on collection updates when there is no subscription. Subscribe first.',
      );
    }
    this.unsubscribeCollectionUpdatesCallback();
    this.unsubscribeCollectionUpdatesCallback = null;
  };

  subscribeElementUpdates = (element: SubscribableModel, callback: (element: T) => void): void => {
    if (this.unsubscribeElementUpdatesCallback !== null) {
      throw new OperationalError(
        'Trying to subscribe on element updates when there is a subscription already. Unsubscribe first.',
      );
    }
    this.unsubscribeElementUpdatesCallback = element
      .getRef()
      .onSnapshot(this.parseSingleElementDataToObject(element, callback));
  };

  unsubscribeElementUpdates = () => {
    if (this.unsubscribeElementUpdatesCallback === null) {
      throw new OperationalError(
        'Trying to unsubscribe on element updates when there is no subscription. Subscribe first.',
      );
    }
    this.unsubscribeElementUpdatesCallback();
    this.unsubscribeElementUpdatesCallback = null;
  };

  private parseCollectionDataToObjects = (
    parent: SubscribableModel,
    callback: (elements: T[]) => void,
  ): ((querySnapshot: RNFirebase.firestore.QuerySnapshot) => void) => {
    return querySnapshot => {
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
    element: SubscribableModel,
    callback: (element: T) => void,
  ): ((document: RNFirebase.firestore.DocumentSnapshot) => void) => {
    return document => {
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
