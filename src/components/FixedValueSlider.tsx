import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconProps, Slider } from 'react-native-elements';

import { dimensions, palette, typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onSlidingComplete: (value: any) => void;
  iconLeft?: IconProps;
  iconRight?: IconProps;
}

interface State {
  index: number;
}

export class FixedValueSlider extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const selectedOption = props.options.find(item => item.value === props.value)!;
    this.state = {
      index: selectedOption ? props.options.indexOf(selectedOption) : 0,
    };
  }

  onSlidingComplete = (index: number) => {
    this.props.onSlidingComplete(this.props.options[index].value);
  };

  setIndex = (index: number) => this.setState({ index });

  render() {
    const { iconLeft, iconRight, options } = this.props;
    return (
      <View style={styles.container}>
        <StyledText style={styles.label}>{options[this.state.index].label}</StyledText>
        <View style={styles.sliderContainer}>
          {!!iconLeft && (
            <View style={styles.iconContainer}>
              <Icon size={32} color={palette.primary} {...iconLeft} />
            </View>
          )}
          <View style={styles.sliderInnerContainer}>
            <View style={styles.pointsContainer}>
              {options.map((_, index) => (
                <View key={index} style={[styles.point, index === this.state.index && styles.pointSelected]} />
              ))}
            </View>
            <Slider
              minimumValue={0}
              maximumValue={options.length - 1}
              step={1}
              onSlidingComplete={this.onSlidingComplete}
              onValueChange={this.setIndex}
              value={this.state.index}
              style={styles.slider}
              trackStyle={styles.sliderTrack}
              thumbStyle={styles.sliderThumb}
              maximumTrackTintColor="transparent"
              minimumTrackTintColor="transparent"
            />
          </View>
          {!!iconRight && (
            <View style={styles.iconContainer}>
              <Icon size={24} color={palette.primary} {...iconRight} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: dimensions.spacingBig,
  },
  label: {
    ...typography.caption,
    color: palette.primary,
    marginBottom: dimensions.spacingMedium,
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderInnerContainer: {
    borderRadius: dimensions.spacingBig,
    height: 40,
    marginHorizontal: dimensions.spacingBig,
    backgroundColor: palette.backgroundAdditional,
    flex: 1,
  },
  slider: {
    flex: 1,
  },
  sliderTrack: {
    height: 40,
    borderRadius: dimensions.spacingBig,
  },
  sliderThumb: {
    width: 40,
    height: 40,
    borderRadius: dimensions.spacingBig,
    backgroundColor: palette.primary,
  },
  pointsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  point: {
    zIndex: 10,
    width: dimensions.spacingTiny,
    height: dimensions.spacingTiny,
    borderRadius: 3,
    margin: 17,
    backgroundColor: palette.primary,
  },
  pointSelected: {
    backgroundColor: palette.background,
  },
  iconContainer: {
    opacity: 0.4,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
