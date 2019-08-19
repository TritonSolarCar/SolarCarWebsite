import React from 'react'

import { Link } from 'components/Router'

import backgroundImage from '../images/final-render-cool.png'

const welcomeStyle = {
  // Makes the background image cover the full page.
  "backgroundImage": "url(" + backgroundImage + ")",
  "height": "100%",
  "backgroundPosition": "center",
  "backgroundRepeat": "no-repeat",
  "backgroundSize": "cover",

  // Makes title centered.
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center"
}

const titleStyle = {

}

const linkStyle = {
  "textDecoration": "none",

  // Adds a contrast for the white text.
  "paddingLeft": "10px",
  "paddingRight": "10px",
  "paddingTop": "10px",
  "paddingBottom": "10px",
  "borderStyle": "solid",
  "width": "25%",
  "marginWidth": "auto",
  "marginTop" : "30px",

  "display": "inline-block"
}


export default function Welcome() {
  return (
    <div style={welcomeStyle}>
      <div className="text-center text-white">
        <h1
          className="display-3  font-weight-bold"
        >
          UC San Diego <br/>
          Solar Car Team
        </h1>
        <h5>
          We are Engineers for a Sustainable World
        </h5>
        <Link to="/" id="join-button" style={linkStyle}>
            JOIN US
        </Link>
      </div>
    </div>
  )
}
