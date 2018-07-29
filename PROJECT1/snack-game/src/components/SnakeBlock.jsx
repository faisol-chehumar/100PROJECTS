import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.section === 'head' ? 'red' : '#636363'};
  border: 1px solid #eee;
`

const SnakeBlock = () => {
  return (
    <Block />
  )
}

export default SnakeBlock
