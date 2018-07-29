import React, { Component } from 'react'
import SnakeContainer from './SnakeContainer'
import BackgroundBlock from './BackgroundBlock'
import Table from './Table'

class TableContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

      table: (function () {
        let tableArr = []
        for(let i = 0; i < props.size; i++) {
          tableArr.push([])
          for(let j = 0; j < props.size; j++) {
            tableArr[i].push(0)
          }
        }

        props.snakeBody.forEach(elem => {
          const row = elem[0]
          const col = elem[1]
          tableArr[row][col] = 1
        })

        return tableArr
      })()
    }
  }


  render() {
    const { table } = this.state

    return (
      <Table>
        {
          table.map((row, i) => {
            return row.map((col, j) => {
              return col === 0 ? <BackgroundBlock key={`${i}-${j}`} /> : <SnakeContainer key={`${i}-${j}`} />
            })
          })
        }
      </Table>
    )
  }
}

export default TableContainer