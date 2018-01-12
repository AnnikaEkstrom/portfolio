import React from "react"
// import { Link } from "react-router-dom"
import projects from "./../data/projects"
import "./projectPreview.css"
import Details from "./details"

class ProjectPreview extends React.Component {

  render() {
    return (
      // <Link to={`/projects/${this.props.url}`} className="projects">
      <div className="grid-container">
        {projects.map((item) => {
          return <Details
            key={item.id}
            description={item.description}
            projectImage={item.projectImage}
            link={item.link} />
        })}
      </div>
    )
  }

}

export default ProjectPreview
