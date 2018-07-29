import React from 'react'
import styled from 'styled-components'

const TableBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 500px;
`

const Table = (props) => {
  return (
    <TableBlock>
      {props.children}
    </TableBlock>
  )
}

export default Table