import React from 'react';
import { StyleSheet, View } from 'react-native';

import { PlanNameText } from 'components';
import { PlanItem, StudentDisplayOption } from 'models';
import { palette } from 'styles';
import { SlideImage } from '../../../components/runPlanSlide/SlideImage';
import { PlanItemTimer } from '../PlanItemTimer';

interface Props {
  planItem: PlanItem;
  index: number;
  textSize: string;
  isUpperCase: boolean;
  type: StudentDisplayOption;
  imageUri: string;
}

interface State {
  imageUri: string;
}

export class PlanSlideItem extends React.PureComponent<Props, State> {
  state = {
    imageUri: '',
  };

  get showText(): boolean {
    const { type } = this.props;
    return type === StudentDisplayOption.ImageWithTextSlide || type === StudentDisplayOption.TextSlide;
  }

  get showImage(): boolean {
    const { type } = this.props;
    const imageMode = type === StudentDisplayOption.ImageWithTextSlide || type === StudentDisplayOption.LargeImageSlide;
    return imageMode && !!this.props.planItem.image;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.showImage && <SlideImage imageUri={this.props.imageUri} />}
        {this.showText && (
          <PlanNameText
            planName={this.props.planItem.name}
            isUpperCase={this.props.isUpperCase}
            textSize={this.props.textSize}
          />
        )}
        {!!this.props.planItem.time ? <PlanItemTimer itemTime={this.props.planItem.time} /> : null}
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
});
