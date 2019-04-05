import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton } from 'components';
import { Student, StudentDisplayOption } from 'models';
import { i18n } from 'locale';
import { palette } from '../../styles';

interface Props {
  student: Student;
}

interface State {
  studentDisplayOption: StudentDisplayOption;
}

export class StudentDisplaySettings extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      studentDisplayOption: props.student.displaySettings,
    };
  }

  isActive = (option: StudentDisplayOption): boolean =>
    this.state.studentDisplayOption === option;

  setActive = (option: StudentDisplayOption) => {
    this.setState({
      studentDisplayOption: option
    });
    this.props.student.update({
      displaySettings: option,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, this.isActive(StudentDisplayOption.LargeImageSlide) && styles.active]}>
          <IconButton
            name="image"
            onPress={() => this.setActive(StudentDisplayOption.LargeImageSlide)}
            size={128}
            label={i18n.t(`studentSettings:${StudentDisplayOption.LargeImageSlide}`)}
          />
        </View>

        <View style={[styles.item, this.isActive(StudentDisplayOption.ImageWithTextSlide) && styles.active]}>
        <IconButton
            name="image"
            size={128}
            onPress={() => this.setActive(StudentDisplayOption.ImageWithTextSlide)}
            label={i18n.t(`studentSettings:${StudentDisplayOption.ImageWithTextSlide}`)}
          />
        </View>

        <View style={[styles.item, this.isActive(StudentDisplayOption.ImageWithTextList) && styles.active]}>
        <IconButton
            name="image"
            size={128}
            onPress={() => this.setActive(StudentDisplayOption.ImageWithTextList)}
            label={i18n.t(`studentSettings:${StudentDisplayOption.ImageWithTextList}`)}
          />
        </View>

        <View style={[styles.item, this.isActive(StudentDisplayOption.TextList) && styles.active]}>
        <IconButton
            name="image"
            size={128}
            onPress={() => this.setActive(StudentDisplayOption.TextList)}
            label={i18n.t(`studentSettings:${StudentDisplayOption.TextList}`)}
          />
        </View>

        <View style={[styles.item, this.isActive(StudentDisplayOption.TextSlide) && styles.active]}>
        <IconButton
            name="image"
            size={128}
            onPress={() => this.setActive(StudentDisplayOption.TextSlide)}
            label={i18n.t(`studentSettings:${StudentDisplayOption.TextSlide}`)}
          />
        </View>
      </View>
    );
  }
}

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
  }
});
