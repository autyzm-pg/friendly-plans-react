import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { FullScreenTemplate } from 'components';
import { dimensions, getElevation, palette } from 'styles';
import { TableRow } from './TableRow';

export const CELL_DIMENSIONS = {
  number: 0.3,
  checkbox: 0.3,
  name: 1.7,
  type: 0.5,
  section: 0.5,
  time: 1.9,
  delete: 0.4,
  edit: 0.6,
};

interface Props {
  rowList: number[];
}

export const TaskTable: SFC<Props> = ({ rowList }) => (
  <FullScreenTemplate darkBackground>
    <View style={styles.container}>
      {rowList.map((rowNumber, index) => (
        <TableRow border={!(index === rowList.length - 1)} key={index} rowNumber={rowNumber + 1} />
      ))}
    </View>
  </FullScreenTemplate>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
    marginHorizontal: '6%',
    borderBottomLeftRadius: dimensions.spacingMedium,
    borderBottomRightRadius: dimensions.spacingMedium,
    ...getElevation(1),
  },
});
