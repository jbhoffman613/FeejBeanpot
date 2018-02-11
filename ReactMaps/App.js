/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiaG9mZm1hbmoiLCJhIjoiY2pkaTJwd3lyMTVteTJ4bjliazVyc3NpNCJ9._5aXfau_lZXv7soos0OryA');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    flex: 16,
  },
  button: {
    flex: 1,
    backgroundColor: 'gray',
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

type Props = {};
export default class App extends Component<Props> {

  renderAnnotations () {
      return (
        <Mapbox.PointAnnotation
          key='pointAnnotation'
          id='pointAnnotation'
          coordinate={[-71.089700, 42.340100]}>

          <View style={styles.annotationContainer}>
            <View style={styles.annotationFill} />
          </View>
          <Mapbox.Callout title='Northeastern University' />
        </Mapbox.PointAnnotation>
      )
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <Mapbox.MapView
              styleURL={Mapbox.StyleURL.Street}
              zoomLevel={14}
              centerCoordinate={[-71.089700, 42.340100]}
              style={styles.container}
              showUserLocation={true}
              zoomLevel={14}>
              {this.renderAnnotations()}
          </Mapbox.MapView>
        </View>
        <View style={styles.button}>
          <Button
            style={{alignItems: 'center'}}
            title="Settings"
            onPress={() => {Alert.alert("Button")}}
            color='#FFFFFF'>
          </Button>
        </View>
      </View>
    );
  }
}
