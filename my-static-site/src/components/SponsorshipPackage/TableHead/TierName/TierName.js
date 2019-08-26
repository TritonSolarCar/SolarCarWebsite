import React from 'react'



export default  function TierHead(props) {

  const TierHeadStyle = {
    color: props.color
  }

  return (
    <th style={ TierHeadStyle } >
      {props.name}
      <br/>
      {props.price}
    </th>
  )
};