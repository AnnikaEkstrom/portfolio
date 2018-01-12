import React from "react"
import "./projectPage.css"

class Details extends React.Component {

  render() {
    return (

      <a href={this.props.link} className="projectDetail" style={{ backgroundImage: `url(${this.props.projectImage})` }} alt="a">
        <h2>{this.props.name}</h2>
        <div className="projectDescription">
          <p>{this.props.description}</p>
        </div>

      </a>
    )
  }
}

export default Details
