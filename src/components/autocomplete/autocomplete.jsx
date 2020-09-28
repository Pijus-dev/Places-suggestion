import React from "react";

import { FaSearch } from "react-icons/fa";
import PlacesAutocomplete from "react-places-autocomplete";

import styles from "./autocomplete.module.scss";

const Autocomplete = ({
  location,
  setLocation,
  input,
  icon,
  container,
  submit,
}) => {
  const renderSuggestion = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => (
    <div className={styles.autocompleteRoot}>
      <input {...getInputProps()} className={input} placeholder="Where to?" />
      <FaSearch className={icon} />
      <div className={container}>
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
    <form onSubmit={submit}>
      <PlacesAutocomplete
        value={location}
        onChange={(value) => setLocation(value)}
      >
        {renderSuggestion}
      </PlacesAutocomplete>
    </form>
  );
};

export default Autocomplete;
