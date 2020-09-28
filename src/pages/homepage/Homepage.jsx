import React, { useState } from "react";

import * as actions from "../../redux/location/location.actions";
import { connect } from "react-redux";

import Autocomplete from "../../components/autocomplete/autocomplete";

import swal from "sweetalert";

import { withRouter, Link } from "react-router-dom";

import styles from "./homepage.module.scss";

const HomePage = ({ getLocationId, history }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (location === "") {
      swal("", "Type your desired destination", "info");
    }

    getLocationId(location, history);
  };


  return (
    <div className={styles.backgroundPhoto}>
      <Link to="/">
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-9/120064324_2724045487884417_3893922868058602583_n.png?_nc_cat=111&_nc_sid=ae9488&_nc_ohc=QfbniePK660AX-MFbsB&_nc_ht=scontent.fvno2-1.fna&oh=1c13df48e2ba9b56325504f398c3119f&oe=5F8F6C51"
          alt="logo"
        />
      </Link>
      <div className={styles.textBox}>
        <label>FIND THE GOOD OUT THERE.</label>
        <Autocomplete
          location={location}
          setLocation={setLocation}
          input={styles.formInput}
          icon={styles.searchIcon}
          container={styles.autocompleteDropdownContainer}
        />
        <button onClick={handleSubmit} className={styles.btn}>
          EXPLPORE
        </button>
      </div>
    </div>
  );
};

export default connect(null, actions)(withRouter(HomePage));
