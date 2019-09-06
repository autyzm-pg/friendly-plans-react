import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton } from 'components';
import { i18n } from 'locale';
import { Student, StudentDisplayOption } from 'models';
import { palette } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 8,
    borderRadius: 12,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  active: {
    backgroundColor: palette.backgroundDark,
  },
});

interface Props {
  student: Student;
}

interface State {
  studentDisplayOption: StudentDisplayOption;
}

export class StudentDisplaySettings extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      studentDisplayOption: props.student.displaySettings,
    };
  }

  isActive = (option: StudentDisplayOption): boolean => this.state.studentDisplayOption === option;

  setActive = (option: StudentDisplayOption): void => {
    this.setState({
      studentDisplayOption: option,
    });
    this.props.student.update({
      displaySettings: option,
    });
  };

  setActiveLargeImageSlide = (): void => this.setActive(StudentDisplayOption.LargeImageSlide);
  setActiveImageWithTextSlide = (): void => this.setActive(StudentDisplayOption.ImageWithTextSlide);
  setActiveImageWithTextList = (): void => this.setActive(StudentDisplayOption.ImageWithTextList);
  setActiveTextList = (): void => this.setActive(StudentDisplayOption.TextList);
  setActiveTextSlide = (): void => this.setActive(StudentDisplayOption.TextSlide);

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, this.isActive(StudentDisplayOption.LargeImageSlide) && styles.active]}>
          <IconButton
            name="image"
            onPress={this.setActiveLargeImageSlide}
            size={128}
            label={i18n.t(`studentSettings:${StudentDisplayOption.LargeImageSlide}`)}
          />
        </View>
        <View style={[styles.item, this.isActive(StudentDisplayOption.ImageWithTextSlide) && styles.active]}>
          <IconButton
            name="image"
            size={128}
            onPress={this.setActiveImageWithTextSlide}
            label={i18n.t(`studentSettings:${StudentDisplayOption.ImageWithTextSlide}`)}
          />
        </View>
        <View style={[styles.item, this.isActive(StudentDisplayOption.ImageWithTextList) && styles.active]}>
          <IconButton
            name="image"
            size={128}
            onPress={this.setActiveImageWithTextList}
            label={i18n.t(`studentSettings:${StudentDisplayOption.ImageWithTextList}`)}
          />
        </View>
        <View style={[styles.item, this.isActive(StudentDisplayOption.TextList) && styles.active]}>
          <IconButton
            name="image"
            size={128}
            onPress={this.setActiveTextList}
            label={i18n.t(`studentSettings:${StudentDisplayOption.TextList}`)}
          />
        </View>
        <View style={[styles.item, this.isActive(StudentDisplayOption.TextSlide) && styles.active]}>
          <IconButton
            name="image"
            size={128}
            onPress={this.setActiveTextSlide}
            label={i18n.t(`studentSettings:${StudentDisplayOption.TextSlide}`)}
          />
        </View>
      </View>
    );
  }
}
