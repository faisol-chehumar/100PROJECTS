export default function MyReducer(state = {
  snakeBody: [[7, 1], [7, 2], [7, 3]],
  size: 15,
  table: []
}, action) {
  switch(action.type) {
    case 'MOVE_RIGHT':
      let snakeBodyTmp = state.snakeBody
      const head = snakeBodyTmp[snakeBodyTmp.length - 1]

      snakeBodyTmp.shift()
      snakeBodyTmp.push([head[0], head[1] + 1])
      console.log(snakeBodyTmp)

      return {...state, snakeBody: snakeBodyTmp}
    case 'UPDATE':
      let tableArr = []
      for(let i = 0; i < state.size; i++) {
        tableArr.push([])
        for(let j = 0; j < state.size; j++) {
          tableArr[i].push(0)
        }
      }
      console.log(state.size)
      console.log(action.snakeBody)
      action.snakeBody.forEach(elem => {
        const row = elem[0]
        const col = elem[1]
        tableArr[row][col] = 1
      })

      return {...state, table: tableArr}
    
    default:
      return state
  }
}