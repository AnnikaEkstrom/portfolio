import React from "react"
import { HashRouter, Route } from "react-router-dom"
import About from "pages/about"
import Home from "pages/home"
import IntroVideo from "pages/video"
import Newfirstpage from "pages/newfirstpage"
import ProjectPreview from "./../pages/projectPreview"
import Navigation from "./navigation"
import Footer from "./footer"
import Form from "./form"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Newfirstpage} />
          <Route path="/projects" component={ProjectPreview} />
          <Route path="/about" component={IntroVideo} />
          {/* <Route path="/contact" component={Form} /> */}
          {/* <Footer /> */}

        </div>
      </HashRouter>
    )
  }

}

export default App
