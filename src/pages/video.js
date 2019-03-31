import React from "react"
import "./video.css"
import Details from "./details"

  class IntroVideo extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
          };
      }

      render() {
          return(
              <div>
                  <video className="video-container video-container-overlay" autoPlay="true">
                      <source src={this.props.introVideo} type="video/mp4" />
                  </video>
              </div>
          );
      }

}
export default IntroVideo
