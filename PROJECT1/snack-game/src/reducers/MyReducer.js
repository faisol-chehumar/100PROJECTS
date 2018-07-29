export default function MyReducer(state = {
  snakeBody: [[7, 1], [7, 2], [7, 3]]
}, action) {
  switch(action.type) {
    case 'MOVE_RIGHT':
      let snakeBodyTmp = state.snakeBody
      const head = snakeBodyTmp[snakeBodyTmp.length]
      snakeBodyTmp.push([head[0], head[1] + 1])

      return {...state, snakeBody: snakeBodyTmp}
    default:
      return state
  }
}