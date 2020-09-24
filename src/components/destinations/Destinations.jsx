import React, { useState } from "react";

import NavigationLink from "../navigationLink/navigationLink";

import { destinations } from "../../destinations";

import styles from "./destinations.module.scss";

const Destinations = () => {
  const [navigationLinks, setNavigationLinks] = useState(destinations);

  const toggleDropdown = (id) => {
    setNavigationLinks(
      navigationLinks.map((el, idx, arr) => {
        return {
          ...el,
          showMenu: el.id === id && !arr[idx].showMenu,
        };
      })
    );
  };

  const NavigationBarLinks = navigationLinks.map((navLinkObj) => (
    <NavigationLink
      key={navLinkObj.id}
      {...navLinkObj}
      {...(() =>
        navLinkObj.cities
          ? {
              handleChange: () => toggleDropdown(navLinkObj.id),
            }
          : null)()}
    />
  ));

  return (
    <div className={styles.destinations}>
      <div className="container">
        <h2>Destinatios for future trips</h2>
        <div className={styles.grid}>{NavigationBarLinks}</div>
      </div>
    </div>
  );
};
export default Destinations;
