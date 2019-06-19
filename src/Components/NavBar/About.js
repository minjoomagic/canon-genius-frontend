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
            <h1 className="about-title">Wondering about Canon Genius?</h1>
            <p className="description">
              Canon Genius connects our customers with a live Canon Genius to
              maximize their Canon camera use and enjoyment while being able to
              learn more about the wonderful world of photography
            </p>

            <h3 className="about-name">
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
