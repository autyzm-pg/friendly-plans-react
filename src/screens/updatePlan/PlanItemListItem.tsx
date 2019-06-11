import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, IconButton, StyledText } from 'components';
import { PlanItem } from 'models';
import { palette, typography } from 'styles';

interface Props {
  planItem: PlanItem;
  index: number;
  onDelete: () => void;
}

export class PlanItemListItem extends React.PureComponent<Props> {
  render() {
    const { planItem, onDelete, index } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.indexContainer}>
          <StyledText style={styles.index}>{(index + 1).toString()}</StyledText>
        </View>
        <View style={styles.textContainer}>
          <StyledText style={styles.planName}>{planItem.name}</StyledText>
          <Icon
            containerStyle={styles.planTypeIconContainer}
            name={planItem.getIconName()}
          />
        </View>
        <View style={styles.actionButtonsContainer}>
          <IconButton
            name="close"
            containerStyle={styles.actionButton}
            onPress={onDelete}
            size={26}
          />
          <IconButton
            name="pencil"
            containerStyle={styles.actionButton}
            size={24}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 2,
    zIndex: 2,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 6,
    backgroundColor: palette.background,
    alignItems: 'center',
  },
  indexContainer: {
    backgroundColor: palette.accent,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 8,
    marginEnd: 20,
  },
  index: {
    ...typography.button,
    textAlign: 'center',
    color: palette.textWhite,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  planName: {
    ...typography.subtitle1,
  },
  planTypeIconContainer: {
    marginHorizontal: 16,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginHorizontal: 8,
  },
});
