import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, Image, AsyncStorage } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

class InfluencersScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      influencers: '',
      tactics: '',
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
            influencers: this.state.influencers,
            influencerTactics: this.state.tactics,
          })
      });
    }

  render() {
    return (
        <View style={styles.container}>
          <Title>What people or groups can convince your Decision Maker?</Title>
            <TextInput
                style={{
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 150,
                  fontSize: 30,
                }}
                onChangeText={(text) => this.setState({influencers: text})}
                placeholder="ex. Northeastern"
                multiline = {true}
                numberOfLines = {4}
              />

              <Title>Tactics:</Title>

              <TextInput
                style={{
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 150,
                  fontSize: 30,
                }}
                value={this.state.tactics}
                onChangeText={(text) => this.setState({tactics: text})}
                placeholder="ex. Northeastern"
                multiline = {true}
                numberOfLines = {4}
              />

            <Button
              onPress={()=>{
                this.sendPost();
                Actions.launch({type: ActionConst.RESET});
              }}
              title="Submit!"
              color="#000000"
              accessibilityLabel="Complete the Tracker"
            />
        </View>
    )
  }
}

export default InfluencersScene
