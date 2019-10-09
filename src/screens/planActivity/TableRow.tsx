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
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.NUMBER, alignItems: 'center' }]}>
      <Text style={styles.text}>{rowNumber}</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.CHECKBOX }]}>
      <CheckboxInput checked onPress={noop} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.NAME }]}>
      <Text style={styles.text}>Bębenki afrykańskie</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.TYPE, alignItems: 'flex-start' }]}>
      <Icon name="layers" />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.SECTION }]}>
      <Text style={styles.text}>5</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.TIME }]}>
      <Text style={styles.text}>15'</Text>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.DELETE, alignItems: 'flex-start' }]}>
      <IconButton name="delete" size={24} color={palette.textInputPlaceholder} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.EDIT, alignItems: 'center' }]}>
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
