import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CheckboxInput, Icon, IconButton } from 'components';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import { NavigationService } from 'services';
import { palette, typography } from 'styles';

interface Props {
  rowNumber: number;
  border?: boolean;
  planItem: PlanItem;
  drag: () => void;
}

export const TableRow: React.FunctionComponent<Props> = ({ planItem, border, drag }) => {
  const navigateToPlanItemUpdate = () => {
    NavigationService.navigate(Route.PlanItemTask, {
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
    <TouchableOpacity style={[styles.row, border && styles.rowBorder]} onLongPress={drag}>
      <View style={styles.checkbox}>
        <CheckboxInput checked={planItem.completed} onPress={handleCheckboxChange} />
      </View>
      <View style={styles.planIcon}>
        <Icon name={planItem.getIconName()} type="material" />
      </View>
      <Text style={styles.textName}>{planItem.name}</Text>
      <Text style={styles.text}>{`(${planItem.time || 0})`}</Text>

      <View style={styles.deleteIcon}>
        <IconButton name="delete" size={24} color={palette.textInputPlaceholder} onPress={onDelete} />
      </View>
      <View style={styles.pencilIcon}>
        <IconButton name="pencil" size={24} onPress={navigateToPlanItemUpdate} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 64,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  rowBorder: {
    borderBottomColor: palette.backgroundAdditional,
    borderBottomWidth: 1,
  },
  text: {
    ...typography.body,
    color: palette.textBody,
  },
  textName: {
    ...typography.body,
    color: palette.textGray,
  },
  cell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  deleteIcon: {
    position: 'absolute',
    right: 38,
  },
  pencilIcon: {
    position: 'absolute',
    right: 80,
  },
  planIcon: {
    marginRight: 10,
  },
  checkbox: {
    marginRight: 15,
  },
});
