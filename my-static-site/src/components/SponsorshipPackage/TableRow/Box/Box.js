import React from 'react'

export default function Box(props) {

  const borderLine = '1px solid rgba(0, 0, 0, .2)'
  const borderNone = '0px'

  var border = props.color == 'clear' ? borderNone : borderLine


  const BoxStyle = {
    width: '20px',
    height: '20px',
    margin: '5px',
    border: border,
    background: props.color
  }

  return (
    <div style={BoxStyle}></div>
  )
};