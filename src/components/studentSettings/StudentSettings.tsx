import React from 'react';
import { StyleSheet } from 'react-native';

import { i18n } from 'locale';
import { Student, StudentData, StudentDisplayOption, StudentTextSizeOption } from 'models';
import { dimensions, palette, typography } from 'styles';

import { FlatButton } from '../FlatButton';
import { Separator } from '../Separator';
import { StyledText } from '../StyledText';
import { TextInput } from '../TextInput';
import { AlarmSoundSetting } from './AlarmSoundSetting';
import { DisplaySetting } from './DisplaySetting';
import { PlanDisplayPreview } from './PlanDisplayPreview';
import { SlideCardSetting } from './SlideCardSetting';
import { TextCaseSetting } from './TextCaseSetting';
import { TextSizeSetting } from './TextSizeSetting';
import NotificationSounds, {playSampleSound} from "react-native-notification-sounds";
import { AlarmSoundSettingModal } from './AlarmSoundSettingModal';

interface Props {
  student: Student;
  onStudentCreate?: (data: StudentData) => any;
  onStudentRemove?: () => void;
  onStudentUpdate?: (data: StudentData) => any;
}

//type State = StudentData;

interface State {
  name: string,
  displaySettings: StudentDisplayOption,
  textSize: StudentTextSizeOption,
  isUpperCase: boolean,
  isSwipeBlocked: boolean,
  soundsList;
  modalVisible?: boolean;
  value: string;
}

export class StudentSettings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.student.name,
      displaySettings: props.student.displaySettings,
      textSize: props.student.textSize,
      isUpperCase: props.student.isUpperCase,
      isSwipeBlocked: props.student.isSwipeBlocked,
      soundsList: undefined,
      modalVisible: false,
      value: "",
    };
    NotificationSounds.getNotifications('notification').then(soundsList  => {
      this.setState({soundsList: soundsList});
      this.setValue(soundsList[0].title);
  });
  }

  get canCreate(): boolean {
    const { name } = this.state;
    return !!name;
  }

  handleNameChange = (name: string) => this.setState({ name }, this.onStudentUpdate);

  onDisplaySettingsChange = (displaySettings: StudentDisplayOption) =>
    this.setState({ displaySettings }, this.onStudentUpdate);

  onTextSizeChange = (textSize: StudentTextSizeOption) => this.setState({ textSize }, this.onStudentUpdate);

  onTextCaseChange = (isUpperCase: boolean) => this.setState({ isUpperCase }, this.onStudentUpdate);

  onSwipeBlockedChange = (isSwipeBlocked: boolean) => this.setState({ isSwipeBlocked }, this.onStudentUpdate);

  onStudentCreate = () => this.props.onStudentCreate!(this.state);

  onStudentUpdate = () => this.props.onStudentUpdate && this.props.onStudentUpdate(this.state);

  
 handleClick = () => {
  if(this.state.modalVisible) {
    this.setState({modalVisible: false});
  }
  else {
    this.setState({modalVisible: true});
  }
  this.forceUpdate();
}

setValue = (val: string) => {
  this.setState({value: val});
}

  render() {
    const { onStudentCreate, onStudentRemove } = this.props;
    const { name, displaySettings, textSize, isUpperCase, isSwipeBlocked } = this.state;
    return (
      <>
        <StyledText style={styles.label}>{i18n.t('studentSettings:studentName')}</StyledText>
        <TextInput
          style={styles.textInput}
          placeholder={i18n.t('studentSettings:studentNamePlaceholder')}
          value={name}
          onChangeText={this.handleNameChange}
        />
        <Separator extraWide />
        <StyledText style={[styles.label, styles.taskViewLabel]}>{i18n.t('studentSettings:taskView')}</StyledText>
        <PlanDisplayPreview displaySettings={displaySettings} textSize={textSize} isUpperCase={isUpperCase} />
        <DisplaySetting value={displaySettings} onValueChange={this.onDisplaySettingsChange} />
        <TextSizeSetting value={textSize} onValueChange={this.onTextSizeChange} />
        <TextCaseSetting value={isUpperCase} onValueChange={this.onTextCaseChange} />
        <SlideCardSetting value={isSwipeBlocked} onValueChange={this.onSwipeBlockedChange} />
        <Separator extraWide />
        <StyledText style={[styles.label, styles.taskViewLabel]}>{i18n.t('studentSettings:soundSettings')}</StyledText>
        <AlarmSoundSetting value={this.state.value} handleClick={this.handleClick} soundsList={this.state.soundsList} modalVisible={this.state.modalVisible}/>
        {this.state.modalVisible && <AlarmSoundSettingModal soundsList={this.state.soundsList} setValue={this.setValue}/>}
        <Separator extraWide />

        {!!onStudentCreate && (
          <FlatButton
            title={i18n.t('studentSettings:createStudent')}
            onPress={this.onStudentCreate}
            disabled={!this.canCreate}
          />
        )}
        {!!onStudentRemove && (
          <FlatButton title={i18n.t('studentSettings:removeStudent')} onPress={this.props.onStudentRemove} />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    ...typography.overline,
    color: palette.textDisabled,
  },
  taskViewLabel: {
    marginVertical: dimensions.spacingSmall,
  },
  textInput: {
    marginTop: dimensions.spacingSmall,
    marginBottom: dimensions.spacingBig,
  },
});
