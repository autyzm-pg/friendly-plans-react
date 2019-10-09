import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, StyledText } from 'components';
import { i18n } from 'locale';
import { palette, typography } from 'styles';
import { CELL_DIMENSIONS } from './TaskTable';

export const TaskTableHeader: SFC = () => (
  <View style={styles.row}>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Number, alignItems: 'center' }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:number')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Checkbox, alignItems: 'flex-start' }]}>
      <Icon size={24} name="checkbox-blank-outline" color={palette.textDisabled} />
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Name }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:name')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Type, alignItems: 'flex-start' }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:type')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Section }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:section')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Time }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:time')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Delete, alignItems: 'flex-start' }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:delete')}</StyledText>
    </View>
    <View style={[styles.cell, { flex: CELL_DIMENSIONS.Edit, alignItems: 'center' }]}>
      <StyledText style={styles.text}>{i18n.t('taskTable:edit')}</StyledText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    height: 32,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: '6%',
    paddingVertical: 9,
  },
  cell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: palette.textDisabled,
    ...typography.overline,
  },
});
