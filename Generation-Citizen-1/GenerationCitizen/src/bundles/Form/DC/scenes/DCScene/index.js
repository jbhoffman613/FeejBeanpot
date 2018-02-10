import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'

class DCScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      dc1: '',
      dc2: '',
      dc3: '',
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
              dc1: this.state.dc1,
              dc2: this.state.dc2,
              dc3: this.state.dc3,
            })
        });
    }

    render() {
      return (
        <View style={styles.container}>
          <Title>DC 1:</Title>
          <TextInput
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 30,
              fontSize: 15,
            }}
            onChangeText={(text) => this.setState({dc1: text})}
            placeholder="ex. Northeastern"
            multiline = {true}
            numberOfLines = {4}
          />
          <Title>DC 2:</Title>
          <TextInput
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 30,
              fontSize: 15,
            }}
            onChangeText={(text) => this.setState({dc2: text})}
            placeholder="ex. Northeastern"
            multiline = {true}
            numberOfLines = {4}
          />

          <Title>DC 3:</Title>
          <TextInput
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 75,
              fontSize: 15,
            }}
            onChangeText={(text) => this.setState({dc3: text})}
            placeholder="ex. Mr. Smith"
            multiline = {true}
            numberOfLines = {4}
          />

          <Button
            style={{
              alignItems: 'center',
            }}
            onPress={ ()=>{
              this.sendPost();
              Actions.launch({type: ActionConst.RESET})
            }}
            title="Next!"
            color="#000000"
            accessibilityLabel="Go to the next section"
          />
        </View>
      )
    }
  }

export default DCScene
