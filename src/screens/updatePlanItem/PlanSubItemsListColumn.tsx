import React from 'react';
import {StyleSheet, View} from 'react-native';

import {FlatButton} from 'components';
import { i18n } from 'locale';
import {palette} from 'styles';
import {PlanItem} from '../../models';
import {PlanSubItemList} from './PlanSubItemList';

interface Props {
  planItem: PlanItem;
}

export class PlanSubItemsListColumn extends React.PureComponent<Props> {

  render() {
    const { planItem } = this.props;

    return (
      <View>
          <PlanSubItemList planItem={planItem} />
          <FlatButton
           icon={{
             name: 'plus',
             type: 'material-community',
             color: palette.primaryDark,
           }}
           title={i18n.t('updatePlanItem:addSubPlanItem')}
           containerStyle={styles.buttonContainer}
           onPress={() => planItem.createSubItem()}
         />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
  }
});
