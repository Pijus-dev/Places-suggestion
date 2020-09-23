import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import * as actions from "../../redux/location/location.actions";
import { connect } from "react-redux";

import PlacesAutocomplete from "react-places-autocomplete";
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

  const renderSuggestion = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => (
    <div className="autocomplete-root">
      <input
        {...getInputProps()}
        className={styles.formInput}
        placeholder="Where to?"
      />
      <FaSearch className={styles.searchIcon} />
      <div className={styles.autocompleteDropdownContainer}>
        {loading && <div>Loading...</div>}
        {suggestions.map((suggestion, idx) => (
          <div
            {...getSuggestionItemProps(suggestion)}
            key={idx}
            style={{ padding: "10px" }}
          >
            <span className={styles.suggestion}>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

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
        <PlacesAutocomplete
          value={location}
          onChange={(value) => setLocation(value)}
        >
          {renderSuggestion}
        </PlacesAutocomplete>
        <button onClick={handleSubmit} className={styles.btn}>
          EXPLPORE
        </button>
      </div>
    </div>
  );
};

export default connect(null, actions)(withRouter(HomePage));
