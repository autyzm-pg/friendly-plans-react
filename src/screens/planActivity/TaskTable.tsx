import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { FullScreenTemplate } from 'components';
import { PlanItem } from 'models';
import { dimensions, getElevation, palette } from 'styles';
import { TableRow } from './TableRow';

export const CELL_DIMENSIONS = {
  NUMBER: 0.3,
  CHECKBOX: 0.3,
  NAME: 1.7,
  TYPE: 0.5,
  SECTION: 0.5,
  TIME: 1.9,
  DELETE: 0.4,
  EDIT: 0.6,
};

interface Props {
  rowList: PlanItem[];
}

export const TaskTable: SFC<Props> = ({ rowList }) => (
  <FullScreenTemplate darkBackground>
    <View style={styles.container}>
      {rowList.map((row, index) => (
        <TableRow planItem={row} border={index !== rowList.length - 1} key={index} rowNumber={index + 1} />
      ))}
    </View>
  </FullScreenTemplate>
);

const styles = StyleSheet.create({
  container: {
    ...getElevation(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
    marginHorizontal: '6%',
    borderBottomLeftRadius: dimensions.spacingMedium,
    borderBottomRightRadius: dimensions.spacingMedium,
  },
});
