import React, { Component } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Destinations from "../destinations/Destinations";

const WithNavbar = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <WrappedComponent />
          <Destinations />
          <Footer />
        </div>
      );
    }
  };
};

export default WithNavbar;
