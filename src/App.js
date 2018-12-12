import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import People from "./routes/People";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <div className="navbar-nav-scroll">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/people" className="nav-link">People</NavLink>
                </li>
              </ul>
            </div>
          </header>
          <div className="container-fluid">
            <Route path="/" exact component={Home} />
            <Route path="/people" exact component={People} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
