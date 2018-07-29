function moveRight() {
  return { type: 'MOVE_RIGHT' }
}

function update(snakeBody) {
  return { type: 'UPDATE', snakeBody: snakeBody }
}

export { moveRight, update }
 