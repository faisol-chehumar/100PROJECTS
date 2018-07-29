import {createStore, combineRuducers} from 'redux'
import MyReducer from './reducers/MyReducer'

const reducer = combineRuducers({
  MyReducer
})

let store = createStore(reducer)

export default store