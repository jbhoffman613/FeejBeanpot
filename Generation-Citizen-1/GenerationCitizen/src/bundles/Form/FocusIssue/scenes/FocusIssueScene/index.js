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
class FocusIssueScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      focusIssue: '',
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
          focusIssue: this.state.focusIssue,
        })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>
          What is the focus issue? Be specific and make sure to provide the
          "who", "what", "where", etc.
        </Title>
        <TextInput
          style={{
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 150,
            fontSize: 20,
          }}
          onChangeText={(text) => this.setState({focusIssue: text})}
          placeholder="Focus Issue - Type Here"
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

export default FocusIssueScene
