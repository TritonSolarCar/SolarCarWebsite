import React from 'react'
import Box from './Box'

const clear = 'clear';

export default  function TableRow(props) {
  return (
    <tr>
      <th>{props.perk}</th>
      <td>
        <Box
          color={ props.triton ? props.tierColors.triton : clear}
        />
      </td>
      <td>
        <Box
          color={ props.bronze ? props.tierColors.bronze : clear}
        />
      </td>
      <td>
        <Box
          color={ props.silver ? props.tierColors.silver : clear}
        />
      </td>
      <td>
        <Box
          color={ props.gold ? props.tierColors.gold : clear}
        />
      </td>
      <td>
        <Box
          color={ props.platinum ? props.tierColors.platinum : clear}
        />
      </td>
    </tr>
  )
};