import noop from 'lodash.noop';
import React, { SFC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CheckboxInput, Icon, IconButton } from 'components';
import { palette, typography } from 'styles';
import { CELL_DIMENSIONS } from './TaskTable';

interface Props {
  rowNumber: number;
  border?: boolean;
}

export const TableRow: SFC<Props> = ({ rowNumber, border }) => (
  <View style={[styles.row, border && styles.rowBorder]}>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.number, alignItems: 'center' }]}>
      <Text style={styles.text}>{rowNumber}</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.checkbox }]}>
      <CheckboxInput checked onPress={noop} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.name }]}>
      <Text style={styles.text}>Bębenki afrykańskie</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.type, alignItems: 'flex-start' }]}>
      <Icon name="layers" />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.section }]}>
      <Text style={styles.text}>5</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.time }]}>
      <Text style={styles.text}>15'</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.delete, alignItems: 'flex-start' }]}>
      <IconButton name="delete" size={24} color={palette.textInputPlaceholder} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.edit, alignItems: 'center' }]}>
      <IconButton name="pencil" size={24} />
    </View>
  </View>
);

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
