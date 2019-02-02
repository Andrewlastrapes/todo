import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entrance from "./Entrance";
import Dashboard from "./Dashboard";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Entrance} ></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
