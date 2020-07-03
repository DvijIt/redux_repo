import { createStore } from 'redux'

const INCREMENT = 'COUNTER/INCREMENT'
const DECREMENT = 'COUNTER/DECREMENT'
const RESET = 'COUNTER/RESET'

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const reset = () => {
  return {
    type: RESET
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

const initialState = {
  value: 0,
  history: []
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: state.history.concat(1)
      }
    case RESET:
      return {
        ...state,
        history: []
      }
    case DECREMENT:
      return {
        ...state,
        history: state.history.concat(-1)
      }
    default:
      return state;
  }
}

const store = createStore(counterReducer)

export default store;