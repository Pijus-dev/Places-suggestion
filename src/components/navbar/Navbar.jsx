import React, { useState } from "react";

import { Link, useParams, withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import * as actions from "../../redux/location/location.actions";
import { useTransition, animated } from "react-spring";

import MobileNavigation from "../mobileNavigation/MobileNavigation";

import styles from "./navbar.module.scss";

const Navbar = ({ getLocationId, history }) => {
  const location = useParams();
  const [place, setPLace] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    getLocationId(place, history);

    setPLace("");
  };
  const transitions = useTransition(showMenu, null, {
    from: {
      opacity: 0,
      transform: "translateX(-100%)",
      height: "90vh",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)",
      height: "90vh",
    },
    leave: { opacity: 0, transform: "translateX(100%)", height: "90vh" },
  });
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={require("../../img/logo.png")} alt="places logo" />
          </div>
        </Link>
        <div className={styles.links}>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="e.g. London"
                onChange={(e) => setPLace(e.target.value)}
              />
            </form>
            <FaSearch className={styles.icon} />
          </div>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to={`/location/${location.id}`}>Places</Link>
          <Link to={`/location/${location.id}/hotel`}>Hotels</Link>
          <div
            className={`${styles.toggler} ${showMenu ? styles.active : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className={styles.togglerLine}></span>
            <span className={styles.togglerLine}></span>
            <span className={styles.togglerLine}></span>
          </div>
        </div>
      </nav>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <MobileNavigation />
          </animated.div>
        ) : null
      )}
    </header>
  );
};
export default connect(null, actions)(withRouter(Navbar));
