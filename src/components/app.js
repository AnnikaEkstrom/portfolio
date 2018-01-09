import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import About from "pages/about"
import Home from "pages/home"
import ProjectPreview from "./../pages/projectPreview"
import Navigation from "./navigation"
import Footer from "./footer"
import Form from "./form"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPreview} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Form} />
          <Footer />

        </div>
      </BrowserRouter>
    )
  }

}

export default App
