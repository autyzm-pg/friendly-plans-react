import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { palette } from 'styles';
import { CELL_DIMENSIONS } from './TaskTable';

export const TaskTableHeader: SFC = () => (
  <View style={styles.row}>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.number, alignItems: 'center' }]}>
      <StyledText>{i18n.t('taskTable:number')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.checkbox, alignItems: 'center' }]}>
      <Icon name="checkbox-blank-outline" color={palette.textDisabled} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.name }]}>
      <StyledText>{i18n.t('taskTable:name')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.type, alignItems: 'flex-start' }]}>
      <StyledText>{i18n.t('taskTable:type')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.section, flexWrap: 'nowrap' }]}>
      <StyledText style={{ flexWrap: 'nowrap' }}>{i18n.t('taskTable:section')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.time }]}>
      <StyledText>{i18n.t('taskTable:time')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.delete, alignItems: 'flex-start' }]}>
      <StyledText>{i18n.t('taskTable:delete')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.edit, alignItems: 'center' }]}>
      <StyledText>{i18n.t('taskTable:edit')}</StyledText>
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