import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import * as actions from "../../redux/location/location.actions";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import styles from "./homepage.module.scss";

const HomePage = ({ getLocationId, history }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getLocationId(location, history);
  };

  return (
    <div className={styles.backgroundPhoto}>
      <img
        src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-9/120064324_2724045487884417_3893922868058602583_n.png?_nc_cat=111&_nc_sid=ae9488&_nc_ohc=QfbniePK660AX-MFbsB&_nc_ht=scontent.fvno2-1.fna&oh=1c13df48e2ba9b56325504f398c3119f&oe=5F8F6C51"
        alt="logo"
      />
      <div className={styles.textBox}>
        <label>FIND THE GOOD OUT THERE.</label>
        <div className={styles.searchGroup}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Where to?"
              onChange={(e) => setLocation(e.target.value)}
            />
            <FaSearch className={styles.searchIcon} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(withRouter(HomePage));
