/* @flow */
import React, { Component } from 'react'
import { View, Button, Image, Text, AsyncStorage, TouchableHighlight, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'


var alertMessage = "This is a alert message"
var regex = /[A-Z][A-Z].[0-9]+.[A-Z]+.[A-Z]+.(S|F)[0-9]+/i;  //regex rule

class LaunchScene extends Component {
  constructor(props) {
    super(props);
    this.state = { code: ''};
  }

  componentDidMount() {
        AsyncStorage.getItem('classCode').then((value) => {
            this.setState({code: value});
        }).done();
    }

  isValidCode() {
    if(this.state.code == '1') {
      Alert.alert('Alert', alertMessage);
    }
  }

  //its so dumb to write an if else statment here, but code dosent work without it
  testRegex() {
    if(true) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('LaunchScene');
    return (
      //codeLabel = AsyncStorage.getItem("classCode");
      //this.setState({code: codeLabel});
      <View style={styles.container}>

        <Image
        source={require('./GCLogo.png')}
      />


      {/* Change this to a TouchableHghlight in order to create a boz around
      the button.  */}
      <TouchableHighlight>
      <View style={styles.trackerButton} >
      <Button
        disabled={!this.testRegex()}
        onPress={Actions.master}
        title="Complete the Tracker!"
        color="white"
        accessibilityLabel="Complete the Tracker"
       />
       </View>
       </TouchableHighlight>

       <TouchableHighlight>
       <View style={styles.classCodeButton} >
       <Button
         onPress={Actions.classCode}
         title="Class Code"
         color="white"
         accessibilityLabel="Save Class Code"
        />
        </View>
        </TouchableHighlight>

        <Text style ={{color: '#D3481A',fontSize: 20}}>
          {this.state.code}
        </Text>
     </View>
    )
  }
}

export default LaunchScene
