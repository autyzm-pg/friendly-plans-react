import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconProps, Slider } from 'react-native-elements';

import { palette, typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onSlidingComplete: (value: string) => void;
  iconLeft: IconProps;
  iconRight: IconProps;
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
          <View style={styles.iconContainer}>
            <Icon size={32} color={palette.primary} {...iconLeft} />
          </View>
          <View style={styles.sliderInnerContainer}>
            <View style={styles.pointsContainer}>
              {options.map((option, index) => (
                <View key={index} style={styles.point} />
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
          <View style={styles.iconContainer}>
            <Icon size={24} color={palette.primary} {...iconRight} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    ...typography.caption,
    color: palette.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderInnerContainer: {
    borderRadius: 20,
    height: 40,
    marginHorizontal: 24,
    backgroundColor: palette.backgroundDark,
    flex: 1,
  },
  slider: {
    flex: 1,
  },
  sliderTrack: {
    height: 40,
    borderRadius: 20,
  },
  sliderThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 17,
    backgroundColor: palette.primary,
  },
  iconContainer: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
