import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHghlight, AsyncStorage, } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import DatePicker from 'react-native-datepicker'

class Lesson10Scene extends Component {

  constructor(props){
    super(props)
    this.state = {
      classroomCode: '',
      date:"2017-06-01",
    }

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
            lesson10Date: this.state.date,
          })
      });
    }

  render() {
    return (
        <View style={styles.container}>

          <Title>Date of lesson 10 (a.k.a. ACTION!):</Title>

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
            onPress={()=>{
              this.sendPost();
              Actions.launch({type: ActionConst.RESET})
            }}
            title="Submit!"
            color="#000000"
            accessibilityLabel="Complete the Tracker"
          />

        </View>
      )
    }
  }

export default Lesson10Scene
