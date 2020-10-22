import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import Product from "../../components/product/Product";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";

import { fetchRestaurants, fetchAttractions } from "../../api/api";

import styles from "./locationPage.module.scss";

import { GoLocation } from "react-icons/go";

const LocationPage = ({ location }) => {
  const locationId = useParams();

  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [active, setActive] = useState(false);

  const [loading, setLoading] = useState(true);

  const getRestaurants = async () => {
    const data = await fetchRestaurants(locationId.id);

    setRestaurants(data);
    setLoading(false);
  };

  const toggleGrid = () => {
    setActive(!active);
  };

  const getAttractions = async () => {
    const data = await fetchAttractions(locationId.id);
    setAttractions(data);
    setLoading(false);
  };

  useEffect(() => {
    getRestaurants();
    getAttractions();
  }, []);

  useEffect(() => {
    getRestaurants();
    getAttractions();
  }, [locationId.id]);

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
      <Spinner isLoading={loading} />
      <div className="container">
        {active ? (
          <BsFillGrid3X3GapFill
            className={styles.gridIcon}
            onClick={toggleGrid}
          />
        ) : (
          <BsFillGridFill className={styles.gridIcon} onClick={toggleGrid} />
        )}
        <h2>Popular restaurants:</h2>
      </div>
      <div className={active ? "productNewGrid" : "productGrid"}>
        {/* {JSON.parse(localStorage.getItem("restaraunts")).map((props) => {
          return <Product {...props} key={props.name} active={active} />;
        })} */}
        {restaurants.map((props) => {
          return <Product {...props} key={props.name} active={active} />;
        })}
      </div>
      <div className="container">
        <h2>Popular attractions:</h2>
      </div>
      <div className={active ? "productNewGrid" : "productGrid"}>
        {attractions.map((props) => {
          return <Product {...props} key={props.name} active={active} />;
        })}
        {/* {JSON.parse(localStorage.getItem("attractions")).map((props) => {
          return <Product {...props} key={props.name} active={active} />;
        })} */}
      </div>
      {location && (
        <iframe
          title="location map"
          width="100%"
          height="350"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC9wJg8V8gzug1VSDmNtYDRWD3m6os1qW0&q=${location.name}`}
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(LocationPage);
