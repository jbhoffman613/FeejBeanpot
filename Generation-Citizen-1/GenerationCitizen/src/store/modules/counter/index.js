import { Map } from 'immutable';

initialState = Map({
  number: 0,
  collegeChapter: "",
  techer:"",

})
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//This is the reducer
export default function counter(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case DECREMENT:
      return state.set('number', state.get('number') - 1)
    case INCREMENT:
      return state.set('number', state.get('number') + 1)
    // case COLLEGECHAPTER:
    //   return state
    default:
      return state
  }
}

export const decrement = () => ({
  type: DECREMENT,
})

export const increment = () => ({
  type: INCREMENT,
})

export const college = () => ({
  type: COLLEGECHAPTER,
})
