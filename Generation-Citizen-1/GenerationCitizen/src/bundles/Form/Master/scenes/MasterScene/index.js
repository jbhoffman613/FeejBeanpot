import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Picker,
  ScrollView, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'
import {createStore} from 'redux';
import { connect, Provider } from 'react-redux';

class MasterScene extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textView} >
          <Title></Title>
        </View>

        <View style={styles.textView} >
          <Title>Please select the fields you would like to update:</Title>
        </View>

        <TouchableHighlight>
          <View style={styles.button1} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.collegeChapter }
              title="College Chapter"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.button2} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.dc }
              title="Democracy Coaches"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        {/*// TODO:*/}
        <TouchableHighlight>
          <View style={styles.button1} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.lesson4 }
              title="Date of Lesson 4"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        {/*// TODO:*/}
        <TouchableHighlight>
          <View style={styles.button2} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.focusIssue }
              title="Focus Issue"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        {/*// TODO:*/}
        <TouchableHighlight>
          <View style={styles.button1} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.rootCause }
              title="Root Cause"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        {/*// TODO:*/}
        <TouchableHighlight>
          <View style={ styles.button2 } >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.speaker }
              title="Guest Speaker"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.button1} >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.goal }
              title="Goal"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        {/*// TODO:*/}
        <TouchableHighlight>
          <View style={ styles.button2 } >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.lesson10 }
              title="Date of Lesson 10"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={ styles.button1 } >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.decisionMaker }
              title="Decision Maker"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={ styles.button2 } >
            <Button
              onPress={console.log(JSON.stringify(this.state))}
              onPress={ Actions.influencers }
              title="Influencers"
              color="#000000"
              accessibilityLabel="Fill in what college chapter you are apart of"
              style={{ backgroundColor: 'powderblue' }}
            />
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

{/* <Picker
  selectedValue = {this.state.page}
  onValueChange = {(week) => this.setState({ page: week })}
  style = {{width: 300,}}
  >
    <WeekPicker.Item label = "Yes" value = '1' />
    <WeekPicker.Item label = "No" value = 'Actions.classroom' />
    <WeekPicker.Item label = "Other"
      value = "3" />
  </Picker> */}

export default MasterScene
