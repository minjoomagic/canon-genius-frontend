import React from "react";
import { Route, Switch, withRouter } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import Signup from "./Components//LogIn-SignUp/SignUp";
import Login from "./Components//LogIn-SignUp/LogIn";
import NavBar from "./Components//NavBar/NavBar";
import About from "./Components/NavBar/About";
import "./App.css";

class App extends React.Component {
  state = {
    user: null
  };

  render() {
    console.log("logOutHandler", this.logOutHandler);

    return (
      <div className="App">
        <NavBar
          onLoginHandler={this.onLoginHandler}
          title="Canon Genius"
          color="primary"
          logOutHandler={this.logOutHandler}
          user={this.state.user}
        />

        <Switch>
          <Route
            path="/about"
            render={routerProps => (
              <div>
                <About
                  logOutHandler={this.logoutHandler}
                  user={this.state.user}
                />
              </div>
            )}
          />
          <Route path="/main" render={routerProps => <div />} />
          <Route
            path="/login"
            render={routerProps => (
              <div>
                <Login
                  onLoginHandler={this.onLoginHandler}
                  title="Canon Genius"
                  color="primary"
                />
              </div>
            )}
          />
          <Route
            path="/signup"
            render={routerProps => (
              <div>
                <Signup
                  onCreateUserHandler={this.onCreateUserHandler}
                  title="Canon Genius"
                  color="primary"
                />
              </div>
            )}
          />
          {/* ------ Any other route put above this line ------ */}
          <Route
            path="/"
            render={routerProps => <LandingPage title="canon-genius" />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
