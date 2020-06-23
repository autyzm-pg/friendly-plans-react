import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card, Icon, IconButton, StyledText } from 'components';
import { FloatingAction } from 'react-native-floating-action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dimensions, palette, typography } from '../../../../styles';

interface Props {
  onPress?: () => void;
}

export const ComplexTaskAddButton: FC<Props> = ({ onPress }) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <TouchableOpacity style={styles.addBtn} onPress={onPress}>
        <Icon name="plus" color={palette.textWhite} size={40} />
      </TouchableOpacity>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    marginTop: 3,
    marginBottom: dimensions.spacingMedium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: palette.border,
    borderStyle: 'dashed',
    backgroundColor: palette.background,
  },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: palette.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
