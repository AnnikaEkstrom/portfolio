import React from "react"
import "./about.css"
import personality from "./personality.jpg"

class About extends React.Component {

  render() {
    return (
      <div>
        <div className="about-container">
          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front">
                <div className="front-logo" />
                <div className="front-title"><h1 id="about-headline">Education</h1></div>
                <span className="Personality" />
              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Education</div>
                <p>Master in Business from Linköping University
                  and now studying Web Development at Technigo.
                </p>
              </div>

              {/* https://codepen.io/darkwing/pen/bCali */}

            </div>
          </div>
          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front">
                <div className="front-logo" />
                <div className="front-title"><h1 id="about-headline">Work</h1></div>
                <span className="Education" />
              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Work experience</div>
                <p>Hitachi, EF and EMG are three companies
                where I worked during six years in Stockholm.
                My areas have been Account Manager and project manager,
                mainly working with customer relationships, customer service,
                project management and marketing.
                </p>
              </div>

            </div>
          </div>
          <h1>Personality</h1>
          <div
            className="flip-container"
            ontouchstart="this.classList.toggle('hover')">
            <div className="flipper">
              <div className="front" style={{ backgroundImage: `url(${personality})` }}>
                <span className="Education" />
              </div>
              <div className="back">
                <div className="back-logo" />
                <div className="back-title">Personality</div>
                <p>I am an adventorous and social personn who likes
                  to meet new people.
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
