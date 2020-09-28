import React from "react";

import Dropdown from "../dropdown/dropdown";

import "./navigationLink.scss";

const NavigationLink = ({ title, showMenu, handleChange, cities }) => {
  return (
    <div className="destinations">
      <h4 onClick={handleChange}>{title}</h4>
      <div className={`${showMenu ? "active" : null}`}></div>
      <div>{cities ? <Dropdown open={showMenu} cities={cities} /> : null}</div>
    </div>
  );
};
export default NavigationLink;
