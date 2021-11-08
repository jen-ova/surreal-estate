import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  // const initialState = {
  //   userID: {
  //     id: "",
  //     imgURL: "",
  //     userName: "",
  //   },
  // };

  // const [userID, setUserID] = useState(initialState.userID);

  // const handleLogin = (response) => {
  //   setUserID({
  //     id: response.id,
  //     imgURL: response.picture.data.url,
  //     userName: response.name,
  //   });
  // };

  // const handleLogout = () => {
  //   window.FB.logout(() => {
  //     setUserID(initialState.userID);
  //   });
  // };

  return (
    <Router>
      <div className="App">
        <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
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
};

export default App;
