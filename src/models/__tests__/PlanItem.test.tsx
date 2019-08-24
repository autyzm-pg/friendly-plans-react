import React from 'react';
import {OperationalError} from '../../infrastructure/Errors';
import {PlanItem, PlanItemType} from '../PlanItem';

describe('PlanItem', () => {

  [
      { planItemType: PlanItemType.SimpleTask },
      { planItemType: PlanItemType.Break },
      { planItemType: PlanItemType.Interaction },
  ].forEach(({ planItemType }) => {
    it(`should raise an exception when trying create subItem for ${planItemType} type item`, () => {
      const planItem = new PlanItem();
      planItem.id = 'ID-1';
      planItem.type = planItemType;
      expect(planItem.createSubItem).toThrow(OperationalError);
  });
 });

});
