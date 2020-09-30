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
            <img
              src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-9/120492533_365145064613137_2379704107000263193_n.png?_nc_cat=108&_nc_sid=ae9488&_nc_ohc=hUZ7s-gO5JkAX8cstoI&_nc_ht=scontent.fvno2-1.fna&oh=355a4592bc5753adbe1ad52e4a5baaf8&oe=5F976DDB"
              alt=""
            />
          </div>
        </Link>
        <div className={styles.links}>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="type here"
                onChange={(e) => setPLace(e.target.value)}
              />
            </form>
            <FaSearch className={styles.icon} />
          </div>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to={`/location/${location.id}`}>Places</Link>
          <Link to={`/location/${location.id}/flights`}>Flights</Link>
          <Link to={`/location/${location.id}/hotel`}>Book hotel</Link>
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
