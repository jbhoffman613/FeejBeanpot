/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { decrement, increment } from '@store/modules/counter'

const mapStateToProps = (state) => ({
  counter: state.counter.get('number'),
})

const mapActionsToProps = { increment, decrement }

type Props = {
  counter: number,
  increment: Function,
  decrement: Function,
}

export default (container: any) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
