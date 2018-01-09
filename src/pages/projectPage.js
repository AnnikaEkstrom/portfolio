import React from "react"
import projects from "./data/projects"
import "./projectPage.css"

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))
    this.setProject(project)
  }

setProject = (project) => {
  this.setState({
    project
  })
}

render() {
  return (
    <div>
      <div className="ProjectPage">
        <h1>{this.state.project.name}</h1>
        <div className="projectDescription">
          <p>{this.state.project.description}</p>
          <div className="projectImage">
            <p>{this.state.project.projectImage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default ProjectPage
