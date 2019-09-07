import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { PlanItem, StudentDisplayOption } from 'models';
import { palette } from 'styles';
import { PlanItemName } from '../PlanItemName';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  textCase: string;
  type: StudentDisplayOption;
}

export class PlanSlideItem extends React.PureComponent<Props> {
  get showText(): boolean {
    const { type } = this.props;
    return (
      type === StudentDisplayOption.ImageWithTextSlide ||
      type === StudentDisplayOption.TextSlide
    );
  }

  get showImage(): boolean {
    const { type } = this.props;
    return (
      type === StudentDisplayOption.ImageWithTextSlide ||
      type === StudentDisplayOption.LargeImageSlide
    );
  }

  render() {
    const { planItem } = this.props;
    return (
      <View style={styles.container}>
        {this.showImage && (
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: `data:image/jpeg;base64,${planItem.image}` }}
            />
          </View>
        )}
        {this.showText && (
          <PlanItemName
            planItemName={this.props.planItem.name}
            textCase={this.props.textCase}
            textSize={this.props.textSize}
            textColor={styles.nameTextColor}
          />
        )}
        {!!this.props.planItem.time ? (
          <PlanItemTimer itemTime={this.props.planItem.time} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  image: {
    flex: 1,
  },
  nameTextColor: {
    color: palette.textBlack,
  },
});
