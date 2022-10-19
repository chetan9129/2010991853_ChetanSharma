import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
