import React from "react";

import styles from "./navbar.module.scss";

import { Link } from "react-router-dom";

const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
      <img
        src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-9/120064324_2724045487884417_3893922868058602583_n.png?_nc_cat=111&_nc_sid=ae9488&_nc_ohc=QfbniePK660AX-MFbsB&_nc_ht=scontent.fvno2-1.fna&oh=1c13df48e2ba9b56325504f398c3119f&oe=5F8F6C51"
        alt=""
      />
      <div className={styles.links}>
        <Link to="/">Home</Link>
      </div>
    </nav>
  </header>
);
export default Navbar;
