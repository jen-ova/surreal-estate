import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Properties />
          </Route>
          <Route exact path="/add-property">
            <AddProperty />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
