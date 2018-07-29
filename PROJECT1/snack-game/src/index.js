import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


// function myListener() {
//   // อ่านค่า state จาก store
//   const state = store.getState()
//   console.log(state)
//   console.log('----------------')
// }
// store.subscribe(myListener)
// myListener()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
