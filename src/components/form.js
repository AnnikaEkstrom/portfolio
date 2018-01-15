import React from "react"
import "./form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

handleName = (event) => {
  this.setState({
    name: event.target.value
  })
}

handleEmail = (event) => {
  this.setState({
    email: event.target.value
  })
}

handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}
handleSubmit = (event) => {
  this.setState({
    submit: event.target.value
  })
}

render() {
  return (

    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <h4>Name:</h4>
          <input type="text" id="name" value={this.state.name} onChange={this.handleName} />
        </label>

        <label htmlFor="email">
          <h4>Email:</h4>
          <input type="email" id="email" value={this.state.email} onChange={this.handleEmail} />
        </label>

        <label htmlFor="message">
          <h4>Message:</h4>
          <textarea name="" id="message" cols="30" rows="10" value={this.state.message} onChange={this.handleMessage} />

        </label>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}
}

export default Form
