import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import Students from './components/Students';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <h1 className="mt-4">
              <span className="text-primary">Sia</span>{" "}
              <span className="builders">World</span>
            </h1>
            <div className="container mt-4">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/students" component={Students} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
