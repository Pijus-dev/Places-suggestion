import React, { useEffect } from "react";

import HomePage from "./pages/homepage/Homepage";
import LocationPage from "./pages/location/LocationPage";
import HotelPage from "./pages/hotelpage/Hotelpage";
import withNavbar from "./components/withNavbar/withNavbar";
import { Switch, Route } from "react-router-dom";

const LocationPageWithNavbarAndFooter = withNavbar(LocationPage);
const HotelPageWithNavbarAndFooter = withNavbar(HotelPage);

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
      </Switch>
    </div>
  );
}

export default App;
