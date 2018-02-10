import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, AsyncStorage, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

class CollegeChapterScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      collegeChapter: '',
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
            collegeChapter: this.state.collegeChapter,
          })
      });
  }

  render() {
    return (
        <View style={styles.container}>
          <Title>College Chapter:</Title>
            <TextInput
                style={{
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 150,
                  fontSize: 30,
                }}
                onChangeText={(text) => this.setState({collegeChapter: text})}
                placeholder="ex. Northeastern"
                multiline = {true}
                numberOfLines = {4}
              />
            <Button
              onPress={() => {
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

export default CollegeChapterScene
