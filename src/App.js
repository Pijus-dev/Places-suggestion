import React, { useEffect } from "react";

import HomePage from "./pages/homepage/Homepage";
import LocationPage from "./pages/location/LocationPage";
import HotelPage from "./pages/hotelpage/Hotelpage";
import FlightsPage from "./pages/flightspage/Flightspage";
import withNavbar from "./components/withNavbar/withNavbar";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const LocationPageWithNavbarAndFooter = withNavbar(LocationPage);
const HotelPageWithNavbarAndFooter = withNavbar(HotelPage);
const FlightsPageWithNavbar = withNavbar(FlightsPage);

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    config: { duration: 550 },
    from: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
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
    </animated.div>
  ));
}

export default App;
