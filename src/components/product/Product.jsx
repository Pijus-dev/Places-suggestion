import React from "react";

import styles from "./product.module.scss";

const Product = (props) => {
  const {
    name,
    description,
    price,
    cuisine,
    address,
    rating,
    web_url,
    location_string,
    photo: { images },
    ranking
  } = props;
  return (
    <div className={styles.product}>
      <a href={web_url}>
        <div
          className={styles.productPhoto}
          style={{ backgroundImage: `url(${images.original.url})` }}
        ></div>
      </a>
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <h4>{description ? description.substring(0, 70) : location_string}</h4>
      </div>
      <div className={styles.price}>
        <span style={{ color: "#F0DC50" }}>{price ?? ""}</span>
        <span style={{ marginLeft: "8px", color: "#717171" }}>
          {rating ?? ""}
        </span>
        {cuisine ? (
          cuisine
            .filter((item, idx) => idx < 3)
            .map((item) => (
              <span key={item.name} style={{ marginLeft: "6px" }}>
                {item.name}
              </span>
            ))
        ) : (
          <span style={{ marginLeft: "6px" }}>{address}</span>
        )}
        <span style={{ marginLeft: "8px", color: "#717171" }}>{ranking ? ranking : null}</span>
      </div>
    </div>
  );
};
export default Product;
