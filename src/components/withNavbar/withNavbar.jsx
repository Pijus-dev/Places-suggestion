import React, { Component } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const WithNavbar = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <WrappedComponent />
          <Footer />
        </div>
      );
    }
  };
};

export default WithNavbar;
