import React from "react";
import { useSpring, animated } from "react-spring";

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
    ranking,
    active,
  } = props;
  const propStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={propStyles} className={styles.product}>
      <a href={web_url} target="_blank" rel="noopener noreferrer">
        <div
          className={`productBackgroundPhoto  ${
            !active ? styles.productPhoto : styles.productGridPhoto
          }`}
          style={{ backgroundImage: `url(${images.original.url})` }}
        ></div>
      </a>
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <h4>
          {description ? description.substring(0, 70) : location_string}
        </h4>
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
        <span style={{ marginLeft: "8px", color: "#717171" }}>
          {ranking ? ranking : null}
        </span>
      </div>
    </animated.div>
  );
};
export default Product;
