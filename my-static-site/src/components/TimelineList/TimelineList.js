import React from 'react'
import Event from './Event'
import CurrentMonth from './CurrentMonth'

import GroupPhotoSoldering from '../../images/group-photo-soldering.jpg'
import CoastalEnterprisesImage from '../../images/coastal-enterprises.jpg'

export default function TimelineList(props) {

  return (
    <div>
      <CurrentMonth
        month="May"
        year="2019"
      />
      <Event
        img={ GroupPhotoSoldering }
        title="First workday of the summer!"
        date="July 27, 2019"
        description="A beautiful day to be training members to solder tabs on the solar cells."
      />
      <Event
        img={ CoastalEnterprisesImage }
        title="Coastal Enterprises"
        date="May 31, 2019 "
        description="Visited Chuck Miller from Coastal Enterprises to pick up Milling Foam + Adhesives to test"
      />
    </div>
  )
};
