import React from 'react'

import backgroundImage from '../images/welcome-banner.jpg'

const welcomeStyle = {
  "backgroundImage": "url(" + backgroundImage + ")",
  "height": "100%",
  "backgroundPosition": "center",
  "backgroundRepeat": "no-repeat",
  "backgroundSize": "cover",

  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center"
}

const titleStyle = {
  "background": "rgba(0, 0, 0)",
  "background": "rgba(0, 0, 0, 0.40)",
  "paddingLeft": "20px",
  "paddingRight": "20px"
}


export default function Welcome() {
  return (
    <div style={welcomeStyle}>
      <div class="text-center text-white" style={titleStyle}>
        <h1
          class="display-3  font-weight-bold"
        >
          UC San Diego <br/>
          Solar Car Team
        </h1>
        <h5>
          We are Engineers for a Sustainable World
        </h5>
      </div>
    </div>
  )
}