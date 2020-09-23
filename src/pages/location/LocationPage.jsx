import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import Product from "../../components/product/Product";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

import styles from "./locationPage.module.scss";

import { GoLocation } from "react-icons/go";


const LocationPage = ({ location }) => {
  const locationId = useParams();

  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchRestaurants = async () => {
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=EUR&lang=en_US&location_id=${locationId.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
        },
      }
    );
    const info = await response.json();
    const { data } = info;
    const restaurantInfo = data
      .slice(0, 16)
      .filter(
        ({ address, rating, description, cuisine }) =>
          address !== undefined &&
          rating > 3.5 &&
          description !== "" &&
          cuisine.length > 0
      )
      .map(
        ({
          address,
          name,
          photo,
          rating,
          cuisine,
          price,
          description,
          web_url,
        }) => {
          return {
            address,
            name,
            photo,
            rating,
            cuisine,
            price,
            description,
            web_url,
          };
        }
      );
    // localStorage.setItem("restaraunts", JSON.stringify(restaurantInfo));
    setRestaurants(restaurantInfo);
    setLoading(false);
  };

  const fetchAttractions = async () => {
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=EUR&sort=recommended&lunit=km&location_id=${locationId.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
        },
      }
    );
    const info = await response.json();
    const { data } = info;
    const attractionsInfo = data
      .slice(1, 25)
      .filter(({ description, rating }) => description !== "" && rating > 3.5)
      .map(({ description, rating, photo, name, web_url, address }) => {
        return {
          description,
          rating,
          photo,
          name,
          web_url,
          address,
        };
      });
    // localStorage.setItem("attractions", JSON.stringify(attractionsInfo));
    setAttractions(attractionsInfo);
    setLoading(false);
  };

  // useEffect(() => {
  //   fetchRestaurants();
  //   fetchAttractions();
  // }, []);

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.locationName}>
          {location && location.name ? (
            <div className={styles.locationBlock}>
              <GoLocation className={styles.locationIcon} />
              <h4>{location.name}</h4>
            </div>
          ) : null}
        </div>
      </div>
      {/* <Spinner isLoading={loading} /> */}
      <div className="container">
        <h2 style={{ fontWeight: "lighter" }}>Best restaurants:</h2>
      </div>
      <div className={styles.productGrid}>
        {JSON.parse(localStorage.getItem("restaraunts")).map((props) => {
          return <Product {...props} />;
        })}
        {/* {restaurants.map((props) => {
          return <Product {...props} key={props.name} />;
        })} */}
      </div>
      <div className="container">
        <h2 style={{ fontWeight: "lighter" }}>Best attractions:</h2>
      </div>
      <div className={styles.productGrid}>
        {/* {attractions.map((props) => {
          return <Product {...props} key={props.name} />;
        })} */}
        {JSON.parse(localStorage.getItem("attractions")).map((props) => {
          return <Product {...props} key={props.name} />;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(LocationPage);
