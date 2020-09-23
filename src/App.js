import React, { useEffect } from "react";

import HomePage from "./pages/homepage/Homepage";
import LocationPage from "./pages/location/LocationPage";
import withNavbar from "./components/withNavbar/withNavbar";
import { Switch, Route } from "react-router-dom";

const LocationPageWithNavbar = withNavbar(LocationPage);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/location/:id" component={LocationPageWithNavbar} />
      </Switch>
    </div>
  );
}

export default App;
