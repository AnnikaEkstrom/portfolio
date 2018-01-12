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
                <p id="text">My name is Annika Ekström,
                  I am currently studying
                  web development at Technigo.
                  <br />
                  Welcome to navigate around in my portfolio.
                </p>
              </div>
            </div>
            <hr />
            <div className="info background">
              <h1>My Background</h1>
              <p>I have mainly worked in sales where my
                focus has been on buildning long
              lasting customer relationships. My previous
              roles have also included project management,
              marketing, customer support and personnell
              responsibility.
              </p>
            </div>
            <hr />
            <div className="info future">
              <h1>My Future</h1>
              <p>With service in mind, I want to add on
                the new knowledge with HTML, CSS, JavaScript,
                React and Node and work with projects
                where I can add value with my combination of
                service-mindness and webdevelopment.
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
