import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, Picker, AsyncStorage, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

class GoalScene extends Component {

  //console.log('CollegeChapterScene')

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      goal: '',
      modelGoal: 'Lobby for or against a bill',
      pendingCall: false,
    };

    this.sendPost = this.sendPost.bind(this);
  }

  componentDidMount() {
        AsyncStorage.getItem('classCode').then((value) => {
            this.setState({classroomCode: value});
        }).done();
    }

  sendPost() {
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:3000/gc', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          classroomCode: this.state.classroomCode,
          goal: this.state.goal,
        })
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Title>What is your class's goal?</Title>
            <TextInput
                style={{
                  textAlign: 'left',
                  padding: 5,
                  alignItems: 'center',
                  height: 180,
                  fontSize: 20,
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                }}
                onChangeText={(text) => this.setState({goal: text})}
                placeholder="ex. To change the world!"
                multiline = {true}
                numberOfLines = {4}
              />

            <Picker
              itemStyle = {{
                //flex: -1,
                width: 300,
                flexDirection: 'row',
              }}
              selectedValue={this.state.modelGoal}
              onValueChange={(model) => {
                console.log(JSON.stringify(this.state));
                this.setState({modelGoal: model})}}>
              <Picker.Item
                label="Lobby for or against a bill"
                value="Lobby for or against a bill" />
              <Picker.Item
                label="Introduce a new bill"
                value="Introduce a new bill" />
              <Picker.Item
                label="Create, improve, or expand public programs"
                value="Create, improve, or expand public programs" />
              <Picker.Item
                //LOOK HERE!
                label="Strengthen Student voice in departments or programs"
                value="Strengthen Student voice in departments or programs" />
            </Picker>

            <Button
              onPress={()=>{
                this.sendPost();
                Actions.launch({type: ActionConst.RESET});
              }}
              styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
              title="Submit!"
              color="#000000"
              accessibilityLabel="Complete the Tracker"
            />
        </View>
    )
  }
}

export default GoalScene
