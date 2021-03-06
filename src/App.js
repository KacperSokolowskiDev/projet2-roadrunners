import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./component/Homepage";
import RoadPage from "./component/Roadpage";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/application">
            <RoadPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
