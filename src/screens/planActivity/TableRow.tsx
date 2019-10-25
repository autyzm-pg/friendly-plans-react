import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CheckboxInput, Icon, IconButton } from 'components';
import { PlanItem } from 'models';
import { NavigationService } from 'services';
import { palette, typography } from 'styles';
import { CELL_DIMENSIONS } from './TaskTable';

interface Props {
  rowNumber: number;
  border?: boolean;
  planItem: PlanItem;
}

export const TableRow: React.FunctionComponent<Props> = ({ rowNumber, planItem, border }) => {
  const navigateToPlanItemUpdate = () => {
    NavigationService.navigate('PlanItemTask', {
      planItem,
    });
  };

  const onDelete = () => {
    planItem.delete();
  };

  const handleCheckboxChange = () => {
    planItem.setComplete(!planItem.completed);
  };

  return (
    <View style={[styles.row, border && styles.rowBorder]}>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.NUMBER, alignItems: 'center' }]}>
        <Text style={styles.text}>{rowNumber}</Text>
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.CHECKBOX, alignItems: 'center' }]}>
        <CheckboxInput checked={planItem.completed} onPress={handleCheckboxChange} />
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.NAME }]}>
        <Text style={styles.text}>{planItem.name}</Text>
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.TYPE, alignItems: 'flex-start' }]}>
        <Icon name={planItem.getIconName()} type="material" />
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.SECTION }]}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.TIME }]}>
        <Text style={styles.text}>{planItem.time}</Text>
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.DELETE, alignItems: 'flex-start' }]}>
        <IconButton name="delete" size={24} color={palette.textInputPlaceholder} onPress={onDelete} />
      </View>
      <View style={[styles.cell, { flex: CELL_DIMENSIONS.EDIT, alignItems: 'center' }]}>
        <IconButton name="pencil" size={24} onPress={navigateToPlanItemUpdate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 56,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  rowBorder: {
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  text: {
    ...typography.body,
    color: palette.textBody,
  },
  cell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
