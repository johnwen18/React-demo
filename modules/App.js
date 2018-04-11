import React from 'react'
import NavLink from './router/NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/router/about">About</NavLink></li>
          <li><NavLink to="/router/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
