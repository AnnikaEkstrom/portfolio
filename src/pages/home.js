import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (

      <div>
        <div className="body">

          <div className="header">
            <h1 id="annika">ANNIKA EKSTRÖM</h1>
          </div>
          <div className="container">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet saepe.</p>
            </div>
            <hr />
            <div className="info future">
              <h1>My Future</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet saepe.</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
