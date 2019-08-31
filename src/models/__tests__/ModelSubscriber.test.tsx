import React from 'react';
import {OperationalError} from '../../infrastructure/Errors';
import {ModelSubscriber} from '../ModelSubscriber';
import {Plan} from '../Plan';
import {Student} from '../Student';

class RefMock {

  onSnapshot = (callback: any) => () => 'unsubscribed';
}

describe('ModelSubscriber', () => {

  it(`should raise when trying to subscribe for collection updates when subscription already exists`, () => {
    const subscriber = new ModelSubscriber<Plan>();
    const student = new Student();
    spyOn(student, 'getChildCollectionRef').and.returnValue(new RefMock());

    subscriber.subscribeCollectionUpdates(student, (elements) => null);

    expect(
      () => subscriber.subscribeCollectionUpdates(student, (elements) => null)
    ).toThrow(OperationalError);
  });

  it(`should raise when trying to unsubscribe from collection updates when there is no subscription`, () => {
    const subscriber = new ModelSubscriber<Plan>();

    expect(subscriber.unsubscribeCollectionUpdates).toThrow(OperationalError);
  });

  it(`should raise when trying to subscribe for element updates when subscription already exists`, () => {
    const subscriber = new ModelSubscriber<Plan>();
    const plan = new Plan();
    spyOn(plan, 'getRef').and.returnValue(new RefMock());

    subscriber.subscribeElementUpdates(plan, (elements) => null);

    expect(
      () => subscriber.subscribeElementUpdates(plan, (elements) => null)
    ).toThrow(OperationalError);
  });

  it(`should raise when trying to unsubscribe from element updates when there is no subscription`, () => {
    const subscriber = new ModelSubscriber<Plan>();

    expect(subscriber.unsubscribeElementUpdates).toThrow(OperationalError);
  });

});
