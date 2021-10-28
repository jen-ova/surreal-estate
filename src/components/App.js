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
        <h2>Surreal Estate</h2>
        <p>
          Aliquip dolore proident magna consectetur aute adipisicing incididunt
          aute cillum culpa pariatur nulla et elit.
        </p>
      </div>
    </Router>
  );
}

export default App;
