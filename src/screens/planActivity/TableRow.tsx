import React, { useEffect, useState } from 'react';

import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
  onEdit: (item: PlanItem) => void;
}

export const TableRow: React.FunctionComponent<Props> = ({ planItem, border, drag, onEdit }) => {
  const [subtaskCount, setSubtaskCount] = useState(0);

  useEffect(() => {
    if (!planItem.isSimpleTask()) {
      planItem
        .getChildCollectionRef()
        .get()
        .then(snap => setSubtaskCount(snap.size));
    }
  });

  const onDelete = async () => {
    await planItem.delete();
  };

  const editHandle = () => {
    onEdit(planItem);
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
      {!planItem.isSimpleTask() && <Text style={styles.text}>{` (${subtaskCount})`}</Text>}

      {!!planItem.time && (
        <View style={styles.timeContainer}>
          <Icon name="timer" size={24} />
          <View style={styles.timeLabelContainer}>
            <Text style={styles.textName}>{`${planItem.time}'`}</Text>
          </View>
        </View>
      )}
      <View style={styles.deleteIcon}>
        <IconButton name="delete" size={24} color={palette.textInputPlaceholder} onPress={onDelete} />
      </View>
      <View style={styles.pencilIcon}>
        <IconButton name="pencil" size={24} onPress={editHandle} />
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
  timeContainer: {
    position: 'absolute',
    right: 138,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeLabelContainer: {
    marginLeft: 10,
  },
});
