import { IconButton } from 'components';
import { i18n } from 'locale';
import { noop } from 'lodash';
import { PlanItem } from 'models';
import { Route } from 'navigation';
import React, { SFC , useState } from 'react';
import { ImageBackground, Button, StyleSheet, View, ScrollView, Text, TouchableOpacity, CheckBox } from 'react-native';
import { NavigationService } from 'services';
import { dimensions, palette } from 'styles';
import { ImageAction } from './ImageAction';
import ImagePicker from 'react-native-image-crop-picker';
import { PlanElementListItem } from 'screens/runPlan/ListMode/PlanElementListItem';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import NotificationSounds, {playSampleSound} from "react-native-notification-sounds";


interface Props {
  //closeModal: () => void;
  soundsList;
  setValue: (value: string) => void;
}

interface State {
  currentIndex: number;
}

export class AlarmSoundSettingModal extends React.PureComponent<Props, State> {
    
  constructor(props){
    super(props);
 
    this.state = {
       currentIndex: 0,
    }

    for (var i = 1; i < this.props.soundsList.length; i++) {
      this.props.soundsList[i].textColored = false
    }
    if (this.state.currentIndex) {
      this.props.soundsList[this.state.currentIndex].textColored = true;
    }
  }

  handleClick = (key) => {
      playSampleSound(this.props.soundsList[key]);
      this.props.soundsList[key].textColored = true;
      this.setState({currentIndex: key});
      for (var i = 0; i < this.props.soundsList.length; i++) {
        if (i != key) this.props.soundsList[i].textColored = false;
      }
      this.props.setValue(this.props.soundsList[key].title);
      this.forceUpdate();
    }
    
    render() {
      return (
        <View style={styles.imageActionContainer}>
            <ScrollView nestedScrollEnabled={true}>
            {
              this.props.soundsList.map(( item, key ) =>
              (
                <View key = { key }>
                  <TouchableOpacity onPress={() => this.handleClick(key)}>
                    <View>
                      <Text style={this.props.soundsList[key].textColored ? styles.textColored : styles.text}>{ item.title }</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
            </ScrollView>
        </View>
      );
    }
};

const styles = StyleSheet.create({
  imageActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: dimensions.spacingLarge,
    height: 600,
  },

  text: {
    fontSize: 18,
    color: 'black',
    padding: 15,
  },

  textColored: {
    fontSize: 18,
    color: 'blue',
    padding: 15,
  }
});
