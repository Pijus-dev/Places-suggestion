import React, { useEffect } from "react";

import HomePage from "./pages/homepage/Homepage";
import LocationPage from "./pages/location/LocationPage";
import HotelPage from "./pages/hotelpage/Hotelpage";
import FlightsPage from "./pages/flightspage/Flightspage";
import withNavbar from "./components/withNavbar/withNavbar";
import { Switch, Route } from "react-router-dom";

const LocationPageWithNavbarAndFooter = withNavbar(LocationPage);
const HotelPageWithNavbarAndFooter = withNavbar(HotelPage);
const FlightsPageWithNavbar = withNavbar(FlightsPage);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/location/:id"
          component={LocationPageWithNavbarAndFooter}
        />
        <Route
          exact
          path={`/location/:id/hotel`}
          component={HotelPageWithNavbarAndFooter}
        />
        <Route
          exact
          path={`/location/:id/flights`}
          component={FlightsPageWithNavbar}
        />
      </Switch>
    </div>
  );
}

export default App;
