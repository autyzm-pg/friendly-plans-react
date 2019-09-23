import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { FlatButton } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';
import { PlanItem, PlanSubItem } from '../../models';
import { PlanSubItemList } from './PlanSubItemList';

interface Props {
  planItem: PlanItem;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
  },
});

export const PlanSubItemsListColumn: SFC<Props> = ({ planItem }: Props) => {
  const handleCreateItem = () => {
    PlanSubItem.create(planItem);
  };

  return (
    <View>
      <PlanSubItemList planItem={planItem} />
      <FlatButton
        icon={{
          name: 'plus',
          type: 'material-community',
          color: palette.primaryVariant,
        }}
        title={i18n.t('updatePlanItem:addSubPlanItem')}
        containerStyle={styles.buttonContainer}
        onPress={handleCreateItem}
      />
    </View>
  );
};
