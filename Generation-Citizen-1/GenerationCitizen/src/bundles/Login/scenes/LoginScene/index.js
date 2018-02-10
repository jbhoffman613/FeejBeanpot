import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';


class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = { code: ''};
  }
  render() {
    return (
      <Provider
       store={this.store}>
        <View style={styles.container}>
          <Title>Class Code:</Title>
          <TextInput
              style={{
                textAlign: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 80,
                fontSize: 15,
              }}
              onChangeText={(code) => this.setState({code})}
            />
          <Button
            onPress={console.log(JSON.stringify(this.state))}
            onPress={ Actions.master }
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            title="Login"
            accessibilityLabel="Complete the Tracker"
          />
        </View>
      </Provider>
    )
  }
}

export default LoginScene
