import React, { Component } from 'react'
import './App.css'
import TableContainer from './components/TableContainer';

class App extends Component {
  // state = {
  //   size: 15
  // }
  render() {
    // const { size } = this.state
    return (
      <div className="App">
        <TableContainer
          // size={size}
        />
      </div>
    )
  }
}

export default App;
