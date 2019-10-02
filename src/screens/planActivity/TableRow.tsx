import noop from 'lodash.noop';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CheckboxInput, Icon, IconButton } from 'components';
import { palette, typography } from 'styles';
import { CELL_DIMENSIONS } from './TaskTable';

interface Props {
  rowNumber: number;
  border?: boolean;
}

export class TableRow extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.row, this.props.border && styles.rowBorder]}>
        <View style={[styles.cell, { flex: CELL_DIMENSIONS.number, alignItems: 'center' }]}>
          <Text style={styles.text}>{this.props.rowNumber}</Text>
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
  }
}

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

/*
if (i === DataSource.length - 1) {
      // check if it's last elem, if so the no border style that you want
      return <View style={styles.noBottomBorder}> ... </View>
    }
*/
