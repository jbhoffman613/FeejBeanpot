import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, AsyncStorage } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import DatePicker from 'react-native-datepicker'

//class SpeakerScene extends Components {
class SpeakerScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classroomCode: '',
      names: '',
      date: "2017-06-01",
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
            guestSpeakerName: this.state.names,
            guestSpeakerDate: this.state.date,
          })
      });
    }

  render() {
    return (
      <View style={styles.container}>
        <Title>Name(s):</Title>
          <TextInput
              style={{
                textAlign: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
                fontSize: 15,
              }}
              onChangeText={(text) => this.setState({names: text})}
              placeholder="ex. Northeastern"
              multiline = {true}
              numberOfLines = {4}
            />

            <Title>On what day will they speak with your class?</Title>

            <DatePicker
              style={{width: 200}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2017-04-01"
              maxDate="2020-06-01"
              confirmBtnText="Submit"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />

          <Button
            style={{
              height: 50,
              alignItems: 'center',
            }}
            onPress={()=>{
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

export default SpeakerScene
