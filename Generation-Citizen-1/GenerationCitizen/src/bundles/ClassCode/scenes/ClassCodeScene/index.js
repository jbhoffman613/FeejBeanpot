import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';


const TYPE_CODE = 'TYPE_CODE';

const typeCode = (text) => ({
  type: TYPE_CODE,
  text,
})

const CodeTextInput = connect((state) => ({
  value: state.code
}), (dispatch) => ({
  onChangeText: (text) => {
    dispatch(typeCode(text));
  }
}))(TextInput)


class ClassCodeScene extends Component {
  constructor(props) {
    super(props);
    this.state = { code: ''};
    this.store = createStore((state, action) => {
      console.log(JSON.stringify(action));
      return {...state, code: action.text}
    }, this.state);
  }


  saveData(value) {
    return (AsyncStorage.setItem('classCode', value))
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
              onChangeText={(text) => this.saveData(text)}
            />
          <Button
            onPress={console.log(JSON.stringify(this.state))}
            onPress={()=>{Actions.launch({type: ActionConst.RESET})}}
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            title="Save"
            accessibilityLabel="Save Class Code"
          />

        </View>
      </Provider>
    )
  }
}

export default ClassCodeScene
