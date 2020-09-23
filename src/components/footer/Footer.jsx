import React from "react";

import { GrGoogle } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram, SiAirbnb } from "react-icons/si";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer>
    <div className="container">
      <div className={styles.footerGrid}>
        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quas voluptas possimus. Eos eveniet obcaecati quidem? Cumque officia
            nam ab, error doloremque atque accusantium dolorum amet libero
            recusandae reiciendis! Cum, ut? Ab laudantium minima maiores eveniet
            hic at! Vitae, corporis.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Explore</h2>
          <p>Home</p>
          <p>About</p>
          <p>Careers</p>
          <p>Destinations</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Contacts</h2>
          <p>some@example.com</p>
          <p>+345960475</p>
          <p>John 13 street, Los Angeles</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footerContent}>
        <p>&copy; All rights reserved 2020</p>
        <div className={styles.icons}>
          <ImFacebook2 size={20} className={styles.icon} />
          <SiInstagram size={20} className={styles.icon} />
          <SiAirbnb size={20} className={styles.icon} />
          <GrGoogle size={20} className={styles.icon} />
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
