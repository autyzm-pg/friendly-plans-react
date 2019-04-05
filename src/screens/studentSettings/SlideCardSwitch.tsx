import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { palette, statusBarHeight, typography } from 'styles';
import { StyledText } from 'components';
import { Student } from 'models'

interface Props {
  student: Student;
}

interface State {
  switch: boolean;
}

export class SlideCardSwitch extends React.PureComponent<Props, State> {
    constructor(props: any){
        super(props);
        this.state = {
            switch: true
        };
    }

    toggleSwitch = () => {
        this.setState({switch: !this.state.switch})
        this.props.student.update({slideCardSwitch: this.state.switch})

    }

    render(){
        return (
            <View>
                <StyledText style={styles.switch}>
                    Przewijanie kart w widoku slajdu:
                </StyledText>
                <Switch style={styles.switch}
                onValueChange={this.toggleSwitch}
                value={this.state.switch}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  switch: {
    ...typography.headline5,
    justifyContent: 'center',
  },
});
