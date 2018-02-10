import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'

const ClassroomScene = () => {

  console.log('ClassroomScene')
  return (
    <View style={styles.container}>
      <Title>School name:</Title>
        <TextInput
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 30,
              fontSize: 15,
            }}
            placeholder="ex. Northeastern"
            multiline = {true}
            numberOfLines = {4}
          />

      <Title>Classroom code:</Title>
        <TextInput
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 30,
              fontSize: 15,
            }}
            //onChangeText={(text) => this.setState({text})}
            placeholder="ex. Northeastern"
            multiline = {true}
            numberOfLines = {4}
          />

          <Title>Teacher:</Title>
            <TextInput
              style={{
                textAlign: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 75,
                fontSize: 15,
              }}
              //onChangeText={(text) => this.setState({text})}
              placeholder="ex. Mr. Smith"
              multiline = {true}
              numberOfLines = {4}
            />

        <Button
          style={{
            height: 100,
            alignItems: 'center',
          }}
          onPress={Actions.dc}
          title="Next!"
          color="#000000"
          accessibilityLabel="Go to the next section"
        />
    </View>
  )
}

export default ClassroomScene
