import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import SnakeContainer from './SnakeContainer'
import BackgroundBlock from './BackgroundBlock'
import Table from './Table'

class TableContainer extends Component {
  constructor(props) {
    super(props)

    props.update(props.snakeBody)

    // this.state = {

    //   table: (function () {
    //     let tableArr = []
    //     for(let i = 0; i < props.size; i++) {
    //       tableArr.push([])
    //       for(let j = 0; j < props.size; j++) {
    //         tableArr[i].push(0)
    //       }
    //     }

    //     // props.snakeBody.forEach(elem => {
    //     //   const row = elem[0]
    //     //   const col = elem[1]
    //     //   tableArr[row][col] = 1
    //     // })

    //     return tableArr
    //   })()
    // }
  }

  async componentDidMount(props) {
    // setInterval(() => {
    //   console.log(this.props.table)
    //   this.props.moveRight()
    //   this.props.update(this.props.snakeBody)
    // }, 5000)
  }

  render() {
    // console.log(this.props)
    const { table } = this.props

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

const mapStateToProps = state => {
  return {
    snakeBody: state.MyReducer.snakeBody,
    table: state.MyReducer.table
  }
}

export default connect(mapStateToProps, actions)(TableContainer)