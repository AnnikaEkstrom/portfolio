import React from "react"
import "./about.css"
import personality from "./personality.jpg"
import something from "./something.jpg"

class About extends React.Component {

  render() {
    return (
      <div>
        <div className="about-container" style={{ backgroundImage: `url(${something})` }} alt="">
          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front">
                <div className="front-logo" />
                <div className="front-title">
                  <h1 id="about-headline">Education <br />
                    <i className="material-icons">school</i>
                  </h1>
                </div>
              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Education</div>
                <p>I am currently studying web development at Technigo.
                    In 12 weeks I have been learning HTML, CSS, JavaScript,
                    React and Node. It is an intense program and every day has
                    been filled with new information, individual assignments
                    and group assignment. <br /> Moreover, I have a Master
                    in Business from Linköping University.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front">
                <div className="front-title">
                  <h1 id="about-headline">Work <br />
                    <i className="material-icons">work</i>
                  </h1>
                </div>

              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Work experience</div>
                <p>Hitachi, EF and EMG are three companies
                where I worked during six years in Stockholm.
                My areas have been Account Manager and project manager,
                mainly working with customer relationships, customer service,
                project management and marketing. I am used to work in
                teams and I value a humble atmosphere.
                </p>
              </div>

            </div>
          </div>
          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front" style={{ backgroundImage: `url(${personality})` }}>
              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Personality</div>
                <p>I see myself as an adventurous and
                  a social person who loves to meet new people.
                  I love travelling and I have seen a lot of places in the
                  world when I have been working, studying and just exploring
                  places abroad. In the summer I like to play golf and in the
                  winter I prefer skiing :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default About
