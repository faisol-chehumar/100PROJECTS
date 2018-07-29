import React, { Component } from 'react'
import './App.css'
import TableContainer from './components/TableContainer';

class App extends Component {
  state = {
    size: 15,
    snakeBody: [[7, 1], [7, 2], [7, 3]]
  }
  render() {
    const { size, snakeBody } = this.state
    return (
      <div className="App">
        <TableContainer
          size={size}
          snakeBody={snakeBody}
        />
      </div>
    )
  }
}

export default App;
