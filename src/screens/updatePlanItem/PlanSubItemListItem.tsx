import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton, StyledText } from 'components';
import { palette, typography } from 'styles';
import { PlanSubItem } from '../../models/PlanSubItem';

interface Props {
  planSubItem: PlanSubItem;
  index: number;
  onDelete: () => void;
  onUpdate: () => void;
}

export class PlanSubItemListItem extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.indexContainer}>
          <StyledText style={styles.index}>{(this.props.index + 1).toString()}</StyledText>
        </View>
        <View style={styles.textContainer}>
          <StyledText style={styles.planName}>{this.props.planSubItem.name}</StyledText>
        </View>
        <View style={styles.actionButtonsContainer}>
          <IconButton name="close" containerStyle={styles.actionButton} onPress={this.props.onDelete} size={26} />
          <IconButton name="pencil" containerStyle={styles.actionButton} size={24} onPress={this.props.onUpdate} />
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
    padding: 1,
    marginVertical: 1,
    marginHorizontal: 1,
    backgroundColor: palette.background,
    alignItems: 'center',
  },
  indexContainer: {
    backgroundColor: palette.secondary,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 1,
    marginEnd: 2,
  },
  index: {
    ...typography.button,
    textAlign: 'center',
    color: palette.textWhite,
  },
  textContainer: {
    alignItems: 'center',
    color: palette.textBlack,
    flex: 1,
    flexDirection: 'row',
  },
  planName: {
    ...typography.subtitle,
  },
  planTypeIconContainer: {
    marginHorizontal: 1,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginHorizontal: 1,
  },
});
