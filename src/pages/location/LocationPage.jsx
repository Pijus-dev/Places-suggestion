import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import Product from "../../components/product/Product";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

import { fetchRestaurants, fetchAttractions } from "../../api/api";

import styles from "./locationPage.module.scss";

import { GoLocation } from "react-icons/go";

const LocationPage = ({ location }) => {
  const locationId = useParams();

  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);

  const [loading, setLoading] = useState(true);

  const getRestaurants = async () => {
    const data = await fetchRestaurants(locationId.id);

    setRestaurants(data);
    setLoading(false);
  };
  const getAttractions = async () => {
    const data = await fetchAttractions(locationId.id);
    setAttractions(data);
    setLoading(false);
  };

  // useEffect(() => {
  //   getRestaurants();
  //   getAttractions();
  // }, []);

  // useEffect(() => {
  //   getRestaurants();
  //   getAttractions();
  // }, [locationId.id]);

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.locationName}>
          {location ? (
            <div className={styles.locationBlock}>
              <GoLocation className={styles.locationIcon} />
              <h4>{location.name}</h4>
            </div>
          ) : null}
        </div>
      </div>
      {/* <Spinner isLoading={loading} /> */}
      <div className="container">
        <h2>Popular restaurants:</h2>
      </div>
      <div className="productGrid">
        {JSON.parse(localStorage.getItem("restaraunts")).map((props) => {
          return <Product {...props} key={props.name} />;
        })}
        {/* {restaurants.map((props) => {
          return <Product {...props} key={props.name} />;
        })} */}
      </div>
      <div className="container">
        <h2>Popular attractions:</h2>
      </div>
      <div className="productGrid">
        {/* {attractions.map((props) => {
          return <Product {...props} key={props.name} />;
        })} */}
        {JSON.parse(localStorage.getItem("attractions")).map((props) => {
          return <Product {...props} key={props.name} />;
        })}
      </div>
        <iframe
          title="location map"
          width="100%"
          height="350"
          frameborder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=Kaunas`}
          allowFullScreen
        ></iframe>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(LocationPage);
