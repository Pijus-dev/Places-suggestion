import React from "react";

import styles from "./dropdown.module.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../redux/location/location.actions";

const Dropdown = ({ cities, open, history, getLocationId }) => {
  return (
    <div className={styles.cities}>
      {open
        ? cities.map(({ name }, idx) => {
            return (
              <div key={idx}>
                {name.map((city) => (
                  <p key={city} onClick={() => getLocationId(city, history)}>
                    {city}
                  </p>
                ))}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default connect(null, actions)(withRouter(Dropdown));
