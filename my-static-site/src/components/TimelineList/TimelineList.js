import React from 'react'
import Event from './Event'
import CurrentMonth from './CurrentMonth'

import GroupPhotoSoldering from '../../images/group-photo-soldering.jpg'

export default function TimelineList(props) {

  return (
    <div>
      <h1>TimelineList</h1>
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
    </div>
  )
};
