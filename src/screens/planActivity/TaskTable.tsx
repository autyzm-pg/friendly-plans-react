import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { FullScreenTemplate } from 'components';
import { dimensions, getElevation, palette } from 'styles';
import { TableRow } from './TableRow';

export const CELL_DIMENSIONS = {
  Number: 0.3,
  Checkbox: 0.3,
  Name: 1.7,
  Type: 0.5,
  Section: 0.5,
  Time: 1.9,
  Delete: 0.4,
  Edit: 0.6,
};

interface Props {
  rowList: number[];
}

export const TaskTable: SFC<Props> = ({ rowList }) => (
  <FullScreenTemplate darkBackground>
    <View style={styles.container}>
      {rowList.map((rowNumber, index) => (
        <TableRow border={index !== rowList.length - 1} key={index} rowNumber={rowNumber + 1} />
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
