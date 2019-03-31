import React from "react"
import { Link } from "react-router-dom"
import "./newfirstpage.css"

class Newfirstpage extends React.Component {



  render() {
    return (

      <div>

        <div className="box">
        <div className="panorama">
          <div className="myname">
            ANNIKA EKSTRÖM
          </div>
          <div className="me">
            <img src="./annika2.png" alt="me" />
          </div>
        </div>
      <div className="middle-container">
        <div className="middle-text">
          <Link to="/projects">Other than relaxing in nice places</Link>, I also love to code.
          I work in a  cool tech company where I code video ads.
          Most of the code is HTML, CSS and JavaScript, but
           I also personally code in React. Except for
           coding, I get to dive into the Adobe Programs
           to edit videos and photos and create cool effects. I learnt
           coding through a boot camp and I keep developing
           width a mindset of learning exactly what I want. In addition
           I actually also teach coding with Tjejer Kodar.
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-text">
          Except coding ads in a creative way, I have also learnt
          several of the Adobe Programs such as Premiere and Photoshop.
          There are amazing creatives that is done with a combination of
          Adobe-solutions and coding, this is what fascinates me in my
          working days and what keeps inspiring mw to learn more in coding.
        </div>
      </div>
      <div className="project-container">
        <div className="project-text">
regvarstbhrsn
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Newfirstpage
