import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, TouchableHghlight, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

//On this scene, volunteers will enter
//their focus issue and root cause.
class DecisionMakerScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      decisionMaker: '',
      decisionMakerTactics: '',
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
            decisionMaker: this.state.decisionMaker,
            decisionMakerTactics: this.state.decisionMakerTactics,
          })
      });
    }

  render() {
    return (
      <View style={styles.container}>
        <Title>
          What person or group has the and responsibility to make the
          change your class envsions?
        </Title>
        <TextInput
          style={{
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            fontSize: 15,
          }}
          onChangeText={(text) => this.setState({decisionMaker: text})}
          placeholder="ex. Northeastern"
          multiline = {true}
          numberOfLines = {4}
        />

        <Title>Decison Maker tactics:</Title>
        <TextInput
          style={{
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            fontSize: 15,
          }}
          onChangeText={(text) => this.setState({decisionMakerTactics: text})}
          placeholder="ex. Northeastern"
          multiline = {true}
          numberOfLines = {4}
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

export default DecisionMakerScene
