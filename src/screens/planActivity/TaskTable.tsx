import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { dimensions, palette } from 'styles';
import { ScrollContainer } from './ScrollContainer';
import { TableRow } from './TableRow';

export const CELL_DIMENSIONS = {
  number: 0.5,
  checkbox: 0.5,
  name: 2.0,
  type: 0.5,
  section: 0.6,
  time: 1.8,
  delete: 0.5,
  edit: 0.7,
};

interface Props {
  rowList: number[];
}

export const TaskTable: SFC<Props> = ({ rowList }) => (
  <>
    <ScrollContainer>
      <View style={styles.container}>
        {rowList.map((rowNumber, index) => (
          <TableRow border={!(index === rowList.length - 1)} key={index} rowNumber={rowNumber + 1} />
        ))}
      </View>
    </ScrollContainer>
  </>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
    marginHorizontal: '7%',
    borderBottomLeftRadius: dimensions.spacingMedium,
    borderBottomRightRadius: dimensions.spacingMedium,
  },
});
