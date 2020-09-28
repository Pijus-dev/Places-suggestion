import React, { useState } from "react";

import { Link, useParams, withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import * as actions from "../../redux/location/location.actions";

import styles from "./navbar.module.scss";

const Navbar = ({ getLocationId, history }) => {
  const location = useParams();
  const [place, setPLace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    getLocationId(place, history);

    setPLace("");
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img
              src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-9/120064324_2724045487884417_3893922868058602583_n.png?_nc_cat=111&_nc_sid=ae9488&_nc_ohc=QfbniePK660AX-MFbsB&_nc_ht=scontent.fvno2-1.fna&oh=1c13df48e2ba9b56325504f398c3119f&oe=5F8F6C51"
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
          <Link to={`/location/${location.id}/hotel`}>Book hotel</Link>
        </div>
      </nav>
    </header>
  );
};
export default connect(null, actions)(withRouter(Navbar));
