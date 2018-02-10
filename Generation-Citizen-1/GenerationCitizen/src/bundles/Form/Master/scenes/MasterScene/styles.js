import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'end',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  button1: {
    flex: -1,
    backgroundColor: '#2ab6d9',
    width: 200,
  },
  button2: {
    flex: -1,
    backgroundColor: '#D64813',
    width: 200
  },
  textView: {
    flex: -1,
  }
})

export default styles
