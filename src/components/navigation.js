import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="navwrapper">
        <label className="hamburger" htmlFor="hamburger">
          <div className="burgermenu" />
          <div className="burgermenu" />
          <div className="burgermenu" />
        </label>
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
        <div className="menu">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Navigation
