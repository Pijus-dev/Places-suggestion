import React from "react";

import { Link } from "react-router-dom";

import styles from "./mobileNavigation.module.scss";
import { useParams } from "react-router-dom";

const MobileNavigation = () => {
  const location = useParams();
  const { id } = location;
  return (
    <div className={styles.mobileNavigation}>
      <div className={styles.navigationLinks}>
        <Link to="/">Home</Link>
        <Link to={`/location/${id}`}>Places</Link>
        <Link to={`/location/${id}/flights`}>Flights</Link>
        <Link to={`/location/${id}/hotel`}>Book hotel</Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
