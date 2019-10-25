import React, { SFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, IconButton, StyledText } from 'components';
import { dimensions, palette, typography } from '../../styles';

interface Props {
  name: string;
  image: string;
  time: string;
  selected?: boolean;
}

export const ComplexTaskItem: SFC<Props> = ({ name, image, time, selected = false }) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <View style={[styles.leftContainer, selected && styles.backgroundPrimary]}>
        <IconButton
          type="material"
          name="visibility"
          size={24}
          color={selected ? palette.textWhite : palette.primary}
        />
        <IconButton type="material" name="delete" size={24} color={palette.textInputPlaceholder} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.timeContainer}>
          <StyledText style={styles.time}>{time}</StyledText>
        </View>
        <View style={styles.taskContainer}>
          <StyledText>{image}</StyledText>
          <StyledText style={styles.name}>{name}</StyledText>
        </View>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    marginTop: 3,
    marginBottom: dimensions.spacingMedium,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 144,
  },
  leftContainer: {
    justifyContent: 'space-between',
    height: '100%',
    borderBottomLeftRadius: dimensions.spacingSmall,
    borderTopLeftRadius: dimensions.spacingSmall,
    backgroundColor: palette.backgroundAdditional,
    paddingVertical: dimensions.spacingMedium,
    paddingHorizontal: dimensions.spacingSmall,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: dimensions.spacingMedium,
    paddingBottom: dimensions.spacingBig,
    paddingRight: dimensions.spacingMedium,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  taskContainer: {
    alignItems: 'center',
  },
  time: {
    ...typography.headline6,
    color: palette.textInputPlaceholder,
  },
  name: {
    ...typography.headline6,
    color: palette.textBody,
    marginTop: dimensions.spacingBig,
  },
  backgroundPrimary: {
    backgroundColor: palette.primary,
  },
});
