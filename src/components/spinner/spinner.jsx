import React from "react";

import styles from"./spinner.module.scss";

const Spinner = ({ isLoading }) => {
  return isLoading ? (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  ) : null;
};

export default Spinner;