import React from 'react'
import { Link } from 'components/Router'

export default  function Navbar() {
  return (
    <nav className="navbar navbar-light" >
      <Link to="/welcome">Welcome</Link>
      <Link to="/team">Team</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/donations">Donations</Link>
    </nav>
  )
};