import React from "react"
import "./projectPage.css"

class Details extends React.Component {

  render() {
    return (

      <div className="projectDetail" style={{ backgroundImage: `url(${this.props.projectImage})` }} alt="a">
        <h2>{this.props.name}</h2>
        <div className="projectDescription">
          <p>{this.props.description}</p>
          <p>{this.props.link}</p>
        </div>
      </div>
    )
  }
}

export default Details
