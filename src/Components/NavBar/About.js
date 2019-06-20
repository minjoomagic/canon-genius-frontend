import React from "react";
import "../../Styling/NavBar/About.css";

class About extends React.Component {
  state = {
    clicked: false
  };

  clickContactHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="about-body">
        <header className="show">
          <div className="container2 show-inner">
            <h1 className="about-title">About</h1>
            <p className="description">
              Canon Genius connects our customers with a live Canon Genius to learn more about the wonderful
              world of photography through the lens of their Canon camera and build a vibrant community of photographers
            </p>

            <h3 className="description">
              <br />
              Created by: Ethan Nam, Robert Han, David Ren
            </h3>
          </div>
        </header>
      </div>
    );
  }
}

export default About;
