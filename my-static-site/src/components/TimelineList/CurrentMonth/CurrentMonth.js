import React from 'react'

export default function CurrentMonth(props) {

  return (
    <div>
      <h1>Current Month</h1>
      <h3>
        <span>
          { props.month }&nbsp;{ props.year }
        </span>
      </h3>

    </div>
  )
};
