/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  trackerButton: {
    flex: -1,
    backgroundColor: '#0A5F73',
    width: 200,
    height: 40,
  },
  classCodeButton: {
    flex: -1,
    backgroundColor: '#ffa500',
    width: 200,
    height: 40,
  },
})

export default styles
