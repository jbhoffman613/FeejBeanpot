import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, AsyncStorage, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

//On this scene, volunteers will enter
//their focus issue and root cause.
class RootCauseScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      rootCause: '',
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
          rootCause: this.state.rootCause,
        })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>
          What is the main systemic reason why your focus issue exists?
        </Title>
        <TextInput
          style={{
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 150,
            fontSize: 20,
          }}
          onChangeText={(text) => this.setState({rootCause: text})}
          placeholder="Root Cause - Type Here"
          multiline = {true}
          numberOfLines = {6}
        />

        <Button
          style={{
            height: 50,
            alignItems: 'center',
          }}
          onPress={() => {
            this.sendPost();
            Actions.launch({type: ActionConst.RESET});
          }}
          title="Submit!"
          color="#000000"
          accessibilityLabel="Go to the next section"
        />
    </View>
  )
}
}

export default RootCauseScene
