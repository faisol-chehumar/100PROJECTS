import {createStore, combineReducers} from 'redux'
import MyReducer from './reducers/MyReducer'

const reducer = combineReducers({
  MyReducer
})

const initialState = {
  MyReducer: {
    direction: 'right',
    snakeBody: [[7, 1], [7, 2], [7, 3]],
    table: [],
    size: 15
  }
};

let store = createStore(reducer, initialState)

export default store