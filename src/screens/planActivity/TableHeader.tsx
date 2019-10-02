import noop from 'lodash.noop';
import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { CheckboxInput, StyledText } from 'components';
import { CELL_DIMENSIONS } from './TaskTable';

export const TableHeader: SFC = () => (
  <View style={styles.row}>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.number, alignItems: 'center' }]}>
      <StyledText>#</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.checkbox }]}>
      <CheckboxInput checked={false} onPress={noop} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.name }]}>
      <StyledText>Nazwa</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.type, alignItems: 'flex-start' }]}>
      <StyledText>Typ</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.section }]}>
      <StyledText>Część</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.time }]}>
      <StyledText>Czas</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.delete, alignItems: 'flex-start' }]}>
      <StyledText>Usuń</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.edit, alignItems: 'center' }]}>
      <StyledText>Edycja</StyledText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    height: 32,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: '7%',
    paddingVertical: 9,
  },
  cell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
