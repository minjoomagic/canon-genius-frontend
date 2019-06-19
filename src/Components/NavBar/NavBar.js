import React from "react";
import "../../Styling/NavBar/NavBar.css";
import "../../Styling/LandingPage/style.css";
import logo from "../../Images/camera.png";
import canon from "../../Images/canon-logo.png";
import { Link } from "react-router-dom";
import { capitalize } from "../../Utilities/Utilities";
import { Button } from "react-bootstrap";

class NavBar extends React.Component {
  logOutHandler = () => {
    this.props.logOutHandler();
  };

  render() {
    return (
      <div>
        <ul className="canon-genius" role="navigation">
          <li>
            <a href="/about" className="map-page">
              About
            </a>
          </li>
          <li className="canon-genius-logo">
            <Link to="/main" className="canon-genius-title">
              <img src={logo} className="logo" alt="" />
              Canon Genius
            </Link>
          </li>
          <li>
            <ul className="login-page">
              Hi{" "}
              {this.props.user ? capitalize(this.props.user.username) : "guest"}
              !
            </ul>
          </li>
          <li>
            {this.props.user ? (
              <Button
                className="logout-btn"
                variant="danger"
                onClick={this.logOutHandler}
              >
                LogOut
              </Button>
            ) : (
              <a href="/login" className="login-page">
                LogIn
              </a>
            )}
          </li>
          <li>{this.props.user ? <i className="fas fa-user" /> : null}</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
