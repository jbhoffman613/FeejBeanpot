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
    backgroundColor: '#8B4513',
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
            <View style={styles.annotationFill}/>
          </View>
          <Mapbox.Callout title='Northeastern University' />
        </Mapbox.PointAnnotation>
      )
    }

    renderAnnotations2 () {
        return (
          <Mapbox.PointAnnotation
            key='pointAnnotation2'
            id='pointAnnotation2'
            coordinate={[-71.087044, 42.337239]}>

            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title='ISEC' />
          </Mapbox.PointAnnotation>
        )
      }

      marino () {
          return (
            <Mapbox.PointAnnotation
              key='marino'
              id='marino'
              coordinate={[-71.086112, 42.342097]}>

              <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
              </View>
              <Mapbox.Callout title='ISEC' />
            </Mapbox.PointAnnotation>
          )
        }

        curry () {
            return (
              <Mapbox.PointAnnotation
                key='curry'
                id='curry'
                coordinate={[-71.087897, 42.340496]}>

                <View style={styles.annotationContainer}>
                  <View style={styles.annotationFill} />
                </View>
                <Mapbox.Callout title='ISEC' />
              </Mapbox.PointAnnotation>
            )
          }

          snellEngineering () {
              return (
                <Mapbox.PointAnnotation
                  key='snellEngineering'
                  id='snellEngineering'
                  coordinate={[-71.090231, 42.337573]}>

                  <View style={styles.annotationContainer}>
                    <View style={styles.annotationFill} />
                  </View>
                  <Mapbox.Callout title='ISEC' />
                </Mapbox.PointAnnotation>
              )
            }

            snellEngineering () {
                return (
                  <Mapbox.PointAnnotation
                    key='library'
                    id='library'
                    coordinate={[-71.088071, 42.337573]}>

                    <View style={styles.annotationContainer}>
                      <View style={styles.annotationFill} />
                    </View>
                    <Mapbox.Callout title='ISEC' />
                  </Mapbox.PointAnnotation>
                )
              }

              westV () {
                  return (
                    <Mapbox.PointAnnotation
                      key='village'
                      id='village'
                      coordinate={[-71.092552, 42.336888]}>

                      <View style={styles.annotationContainer}>
                        <View style={styles.annotationFill} />
                      </View>
                      <Mapbox.Callout title='ISEC' />
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
              centerCoordinate={[-71.087044, 42.337239]}
              style={styles.container}
              showUserLocation={true}
              zoomLevel={14}>
              {this.renderAnnotations()}
              {this.renderAnnotations2()}
              {this.curry()}
              {this.marino()}
              {this.snellEngineering()}
              {this.westV()}
          </Mapbox.MapView>
        </View>
        <View style={styles.button}>
          <Button
            style={{alignItems: 'center'}}
            title="Settings"
            onPress={() => {Alert.alert("Coming Soon...!")}}
            color='#FFFFFF'>
          </Button>
        </View>
      </View>
    );
  }
}
