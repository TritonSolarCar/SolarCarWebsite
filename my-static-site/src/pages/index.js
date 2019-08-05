import React from 'react'
import { Link } from 'components/Router'

export default () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dynamic">Dynamic</Link>
      <Link to="/welcome">Welcome</Link>
    </nav>
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to React-Static</h1>
    </div>
  </div>
)
