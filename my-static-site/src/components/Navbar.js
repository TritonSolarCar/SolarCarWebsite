import React from 'react'
import { Link } from 'components/Router'

export default  function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dynamic">Dynamic</Link>
      <Link to="/welcome">Welcome</Link>
      <Link to="/donations">Donations</Link>
      <Link to="/timeline">Timeline</Link>
    </nav>
  )
};