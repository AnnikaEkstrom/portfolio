import React from "react"
import "./home.css"
import something from "./something.jpg"

class Home extends React.Component {

  render() {
    return (

      <div>
        <div className="body">

          <div className="header">
            <h1 id="annika">ANNIKA EKSTRÖM</h1>
          </div>
          <div className="container" style={{ backgroundImage: `url(${something})` }}>
            <div className="main">
              <div className="image">
                <img src="./annika1.png" alt="Annika" />
              </div>
              <div className="text">
                <p id="text">
                  Hi, my name is Annika. I am passionate about coding and constantly want to learn more.
                  <br />
                  I mainly work with HTML, CSS and JavaScript but I am also a fan of React and Node.
                </p>
              </div>
            </div>
            <hr />
            <div className="info background">
              <h1>MY BACKGROUND</h1>
              <p>I have mainly worked in sales where my
                focus has been on building long
              lasting customer relationships. My previous
              roles have also included project management,
              marketing, customer support and personnel
              responsibility. A few years ago, I got interested in programming so I quit my
              job and learnt programming.
              </p>
            </div>
            <hr />
            <div className="info future">
              <h1>MY FUTURE</h1>
              <p>With service in mind, I want to continue learning more HTML, CSS, JavaScript,
                React and Node and work with projects
                where I can add value with my combination of
                service-mindeness and web development.
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
