import React from 'react'
import TierName from './TierName'

export default  function TableHead(props) {
  return (
    <thead>
      <tr>
        <th></th>
        <TierName 
          name="Triton"
          price="< $500"
          color={props.tierColors.triton}
        />
        <TierName
          name="Bronze"
          price="$500"
          color={props.tierColors.bronze}
        />
        <TierName
          name="Silver"
          price="$1000"
          color={props.tierColors.silver}
        />
        <TierName
          name="Gold"
          price="$2500"
          color={props.tierColors.gold}
        />
        <TierName
          name="Platinum"
          price="$5000+"
          color={props.tierColors.platinum}
        />
      </tr>
    </thead>
  )
};